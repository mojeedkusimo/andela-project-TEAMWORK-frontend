import getUser from '../helperFunctions/getUser';

export const Home = () => {
    const user = getUser();
    // let feed = getFeed();
    return (
        <div className="mt-5 text-center text-primary row">
            <div className='col'></div>
            <div className='col-10 m-5 typing-wlcome-note'>
                <h1>Welcome to TeamWork!</h1>
                {/* <p>Click a link above</p> */}
                <h3>{user === null ? `Hi Stranger` : `Hi ${user.firstname}`}</h3>
            </div>
            <div className='col'></div>
        </div>
    );
}
