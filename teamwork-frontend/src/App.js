import {Route, Switch } from "react-router-dom"
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
          <Route path="/login" component={Login}/>
          <Route path="/post" component={Post}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/register" component={Register}/>
          <Route path="/users" component={Users}/>
          <Route path="/feed" component={Feed}/>
          <Route path={"/article"} component={ViewArticle}/>
          <Route path={"/gif"} component={ViewGif}/>
      </Switch>
    </div>
  );
}

export default App;
