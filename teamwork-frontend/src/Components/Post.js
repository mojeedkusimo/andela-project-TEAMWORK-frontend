import { useState } from 'react';
import AddPost from './AddPost';
import getUser from '../helperFunctions/getUser';
import { useHistory } from 'react-router-dom';
import axios from '../helperFunctions/customAxios';
import checkData from '../helperFunctions/checkData';

export const Post = () => {

    let user = getUser();
    let user_id = user === null ? null : user.user_id; 
    let history = useHistory();
    let [post, setPost] = useState("");
    let [error, setError] = useState("");

    let sendPost = ([title, article]) => {
        setPost({title, article});

        let data = { user_id, title, article };
        let check = checkData(data);

        if ( check === null) {
          axios.post("/articles", data ).then((res) => {
            if (res.data.error) {
              setError(res.data.message);
    
            } else {
              alert(res.data.data.message);
              history.push('/feed');
            }
          });
        } else {
          setError(check);
        }
     }
    return (
    <div>
        {
            user === null ? 
            history.push('/login') :
            <div>
                <AddPost sendPost={sendPost} error={error}/>
            </div> 
        }
    </div>
    );
}
