import getUser from '../helperFunctions/getUser';
import { useHistory, Link } from 'react-router-dom';
import axios from '../helperFunctions/customAxios';
import { useEffect, useState } from 'react';

export const Feed = () => {

    let user = getUser();
    let history = useHistory();
    let [feed, setFeed] = useState();

    let displayFeed = (data) => {
        localStorage.setItem("feed", JSON.stringify(data));
        // let result = data.article_url.slice(0,5) === "image" ? `/gifs/${data.feed_id}` : `/articles/${data.feed_id}`;
        let result = data.article_url.slice(0,5) === "image" ? `/gif` : `/article`;
        history.push(result);
    }

    useEffect(() => {
        let getUsers = async() => {
            let fetchData = await axios.get('/feed');
            let allFeed = fetchData.data.data[0].map((data) => {

                return (
                <div className="row" key={data.feed_id}>
                    <div className="col"></div>
                    <div className="col-9 col-md-7 user-postTitle" >
                        <h3>{data.title}</h3><small>... by {data.firstname}</small>
                        <p>{`${data.article_url.slice(0,50)}...`}<Link to='#' onClick={() => displayFeed(data)} >Read more</Link></p>
                    </div>
                    <div className="col"></div>
                </div>
                )
            });
            setFeed(allFeed);
        }
        if (user !== null) {
            getUsers();
        }
    },[])
    return (
    <div>
        {
            user === null ? 
            history.push('/login')
            :
            <>
                <div className="row mt-5">
                    <div className="col"></div>
                    <div className="col-8 col-md-7 shadow-lg mx-3 my-5">
                        <h1 className="text-center py-3 action-header">Feed</h1>
                    </div>
                    <div className="col"></div>
                </div>
                {feed}
            </>
        }  
    </div>
    );
}
