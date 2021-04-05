import getUser from '../helperFunctions/getUser';
import { useHistory } from 'react-router-dom';
import getFeed from "../helperFunctions/getFeed";

export const ViewGif = () => {

    let user = getUser();
    let history = useHistory();
    let post = "GIF";
// alert(post);
    return (
    <div>
        {
            user === null ? 
            history.push('/login') :
            <div>
                <div className="row mt-5">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h1 className="m-5 text-center shadow-lg">{post}</h1>
                        <p>{post}</p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div> 
        }
    </div>
    );
}
