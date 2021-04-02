import getUser from '../helperFunctions/getUser';
import { useHistory } from 'react-router-dom';
import getFeed from "../helperFunctions/getFeed";
import axios from "../helperFunctions/customAxios";
import { useState } from 'react';

let ViewArticle = () => {

    let [error, setError] = useState('');
    let user = getUser();
    let history = useHistory();
    let post = getFeed();
    let deletePost = async (user_id, feed_id) => {
        let data = {user_id, feed_id}
        let res = await axios.delete(`/feed/${feed_id}`, {data});

        if (res.data.status === 'error') {
            setError(res.data.data.message);
        } else {
            alert(res.data.data.message);
            history.push('/feed');
        }

        
    }

    let modify = user.firstname === post.firstname ? 
                <div className='row mt-5'>
                    <div className='col-4 text-left'><button className='btn btn-success'>Edit</button></div>
                    <div className='col-4 text-center text-danger'>{error}</div>
                    <div className='col-4 text-right'><button className='btn btn-danger' onClick={() => deletePost(user.user_id, post.feed_id)}>Delete</button></div>
                </div> : null

    return (
    <div>
        {
            user === null ? 
            history.push('/login') :
            <div>
                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h1 className="mt-5  text-center shadow-lg">{post.title}</h1>
                        <small className='text-center d-block'>...by {post.firstname}</small>
                        {modify}
                        <p className='bg-light p-5'>{post.article_url}</p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div> 
        }
    </div>
    );
}

export default ViewArticle;