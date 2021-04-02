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
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center shadow-lg">Create a Post</h1>
            <span className="text-danger">{error}</span>
            <form className="bg-light p-5" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Subject" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Write something here..." value={description} onChange={(e) => setDesciption(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Post</button>
            </form>
        </div>
        <div className="col-4"></div>
    </div>
    );
}

export default AddPost;