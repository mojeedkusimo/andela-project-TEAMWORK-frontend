import { useState } from 'react';
import AddPost from './AddPost';

let Post = () => {
    let [post, setPost] = useState("");
     let sendPost = ([title, description]) => {
        setPost({title, description});
     }
    return (
    <div>
        <AddPost sendPost={sendPost}/>

        <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center shadow-lg">Preview</h1>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
        <div className="col-4"></div>
    </div>
    </div>
    );
}

export default Post;