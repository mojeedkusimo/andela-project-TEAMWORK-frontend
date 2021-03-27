
import Login from "./Login";
import Post from "./Post";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

let App = () => {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/post" component={Post}/>
    </Switch>
    </div>
  );
}

export default App;
