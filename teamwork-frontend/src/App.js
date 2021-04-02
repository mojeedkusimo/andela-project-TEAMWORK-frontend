
import Login from "./Components/Login";
import Post from "./Components/Post";
import Dashboard from './Components/Dashboard'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import Users from "./Components/Users";
import Feed from "./Components/Feed";
import ViewArticle from "./Components/ViewArticle";
import ViewGif from "./Components/ViewGif";
import getUrl from "./helperFunctions/getUrl";
// import getFeed from "./helperFunctions/getFeed";

let App = () => {

  // let urlId = getUrl();
  // console.log(urlId)

  return (
    <div>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/post" component={Post}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/feed" component={Feed}/>
        <Route exact path={"/article"} component={ViewArticle}/>
        <Route exact path={"/gif"} component={ViewGif}/>
    </Switch>
    </div>
  );
}

export default App;
