
let Post = ({ title, description }) => {

    return (
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center shadow-lg">Post</h1>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="col-4"></div>
    </div>
    );
}

export default Post;