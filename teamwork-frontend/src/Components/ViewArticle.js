import getUser from '../helperFunctions/getUser';
import { useHistory } from 'react-router-dom';
import getFeed from "../helperFunctions/getFeed";
import axios from "../helperFunctions/customAxios";
import { useState } from 'react';
import ContentEditable from 'react-contenteditable'

export const ViewArticle = () => {

    let [error, setError] = useState('');
    let user = getUser();
    let history = useHistory();
    let post = getFeed();
    const [isEditable, setIsEditable] = useState(true)

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

    const handleEdit = () => {
        setIsEditable(false)
    }

    return (
    <div>
        {
            user === null || user.firstname === " " ? 
            history.push('/login') :
            <>
                <div className="row mt-5">
                    <div className="col"></div>
                    <div className="col-9">
                        <h1 className="text-center pt-3 action-header">{post.title}</h1>
                        <small className='text-center d-block'>...by {post.firstname}</small>
                        <p className='text-danger'>{error}</p>
                        <form>
                            <textarea className='bg-light p-5' disabled={isEditable}>
                                {post.article_url}
                            </textarea>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
                <div className='row my-3'>
                    <div className="col"></div>
                    <button onClick={handleEdit} className='col-3 p-2 btn btn-success'>Edit</button>
                    <div className='col'></div>
                    <button className='col-3 p-2 btn btn-danger' onClick={() => deletePost(user.user_id, post.feed_id)}>Delete</button>
                    <div className="col"></div>
                </div>
            </> 
        }
    </div>
    );
}
