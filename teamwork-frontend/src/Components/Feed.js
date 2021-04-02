import getUser from '../helperFunctions/getUser';
import { useHistory, Link } from 'react-router-dom';
import axios from '../helperFunctions/customAxios';
import { useEffect, useState } from 'react';

let Feed = () => {

    let user = getUser();
    let history = useHistory();
    let [feed, setFeed] = useState("");

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
                    <div className="col-4"></div>
                    <div className="col-4" >
                        <h3>{data.title}</h3><small>... by {data.firstname}</small>
                        <p>{`${data.article_url.slice(0,50)}...`}<Link to='#' onClick={() => displayFeed(data)} >Read more</Link></p>
                    </div>
                    <div className="col-4"></div>
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
            history.push('/login') :
            <div className="mt-5 row">
                <div className='col'></div>
                <div className='col-10'>
                    <div>
                        <h1 className="m-5 text-center shadow-lg">Feed</h1>
                        {feed}
                    </div>
                </div>
                <div className='col'></div> 
            </div>
        }
    </div>
    );
}

export default Feed;