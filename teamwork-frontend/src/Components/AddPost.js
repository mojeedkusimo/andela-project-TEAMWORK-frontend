import { useState } from "react";

let AddPost = ({ sendPost, error }) => {

let [title, setTitle] = useState("");
let [description, setDesciption] = useState("");

 let handleSubmit = (e) => {
     e.preventDefault();

    sendPost([title, description]);
 }

    return (
    <div className="row mt-5">
        <div className="col"></div>
        <div className="col-8 shadow-lg mx-3 my-5">
            <h1 className="text-center pt-3 action-header">Create a Post</h1>
            <form className="p-2" onSubmit={(e) => handleSubmit(e)}>
                <span className="text-danger">{error}</span>
                <div className="form-group">
                <label for="postTitle">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Subject" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="postDescription">Description</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Write something here..." value={description} onChange={(e) => setDesciption(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Post</button>
            </form>
        </div>
        <div className="col"></div>
    </div>
    );
}

export default AddPost;