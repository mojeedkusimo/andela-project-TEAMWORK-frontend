import { useState } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import Dashboard from './Dashboard';

let Login = (sendUserData) => {

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [error, setError] = useState("");
let [success, setSuccess] = useState("");
let [user, setUser] = useState("");

 let handleSubmit = (e) => {
     e.preventDefault();

    setError("");
    setSuccess("");
    axios.post("https://andela-teamwork.herokuapp.com/api/auth/signin", {
      email,
      password
    }).then((res) => {
      if (res.data.status === "error") {
        setError(res.data.error);

      } else {
        let {token} = res.data.data;
        user = (jwtDecode(token));
        setUser(user);
      }
    });

 }

    return (user === '' ? (    
    <div className="row">
    <div className="col-4"></div>
    <div className="col-4">
        <h1 className="m-5 text-center shadow-lg">Login</h1>
        <form className="bg-light p-5" onSubmit={(e) => handleSubmit(e)}>
            <span className="text-danger">{error}</span>
            <span className="text-success">{success}</span>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" placeholder="john.doe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    </div>
    <div className="col-4"></div>
</div>) : (
  <Dashboard firstname={user.firstname} lastname={user.lastname}/>
)

    );
}

export default Login;