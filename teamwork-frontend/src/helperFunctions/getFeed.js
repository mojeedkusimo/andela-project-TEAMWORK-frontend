

let getFeed = () => {
    let feed = JSON.parse(localStorage.getItem("feed"));

    return feed;
}


export default getFeed;
