import { useState } from "react";
import axios from "../helperFunctions/customAxios";
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const Login = () => {

let history = useHistory();
let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [error, setError] = useState("");
let [success, setSuccess] = useState("");

 let handleSubmit = (e) => {
     e.preventDefault();

    setError("");
    setSuccess("");
    axios.post("/auth/signin", {
      email,
      password
    }).then((res) => {
      if (res.data.status === "error") {
        setError(res.data.error);

      } else {
        let {token} = res.data.data;
        let user = (jwtDecode(token));
        localStorage.setItem("userData", JSON.stringify(user));
        history.push('/dashboard');
      }
    });

 }

    return (    
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col-8 shadow-lg mx-3 my-5">
          <h1 className="text-center pt-3 action-header">Login</h1>
          <form className="p-2" onSubmit={(e) => handleSubmit(e)}>
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
      <div className="col"></div>
    </div>)
}
