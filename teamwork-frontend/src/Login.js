import { useState } from "react";

let Login = ({ sendData, error }) => {

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");

 let handleSubmit = (e) => {
     e.preventDefault();

    sendData([email, password]);
 }

    return (
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <h1 className="m-5 text-center shadow-lg">Sign In</h1>
            <form className="bg-light p-5" onSubmit={(e) => handleSubmit(e)}>
                <span className="text-danger">{error}</span>
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
    </div>
    );
}

export default Login;