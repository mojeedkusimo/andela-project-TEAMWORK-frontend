import './App.css';
import './index.css';
import Login from "./Login";
import AddPost from "./AddPost";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Dashboard from "./Dashboard";
import { useState } from 'react';
import Post from "./Post";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, BrowserRouter } from "react-router-dom";

let App = () => {
  let [user, setUser] = useState("");
  let [error, setError] = useState(null);
  let [post, setPost] = useState("");

  let sendData = ([email, password]) => {
    setError(null);
    axios.post("https://andela-teamwork.herokuapp.com/api/auth/signin", {
      email,
      password
    }).then((res) => {
      if (res.data.status === "error") {
        setError(res.data.error);
        console.log(res);
        setUser({
          firstname: "",
          lastname: ""
        }); 
      } else {
        let {token, userId} = res.data.data;
        setUser(jwtDecode(token));
      }
    });
  }

  let sendPost = ([title, description]) => {
    setPost({title, description});
  }
  return (
    <div>
    <Navbar/>
      <Login 
      sendData={sendData} 
      error= {error ? error : null}

      />
      <AddPost sendPost={sendPost}/>
      <Dashboard firstname={user.firstname} lastname={user.lastname}/>
      <Post title={post.title} description={post.description}/>
      <Home/>
    </div>
  );
}

export default App;
