

let getFeed = () => {
    let feed = JSON.parse(localStorage.getItem("feed"));

    if (feed !== null) {
        if (feed.article_url.slice(0,5) === "image") {
            return `/gifs/${feed.feed_id}`;
        }
        return `articles/${feed.feed_id}`;    
    }
    return feed;
}


export default getFeed;
