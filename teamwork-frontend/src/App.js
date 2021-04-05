import { Route, Switch } from "react-router-dom";
import getUrl from "./helperFunctions/getUrl"
import {
        Dashboard, Feed, Home, Login, Navbar, Post, Register,
        Users, ViewArticle, ViewGif
       } 
       from "./Components"

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
