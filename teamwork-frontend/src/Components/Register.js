import { useState, useContext } from "react";
import axios from "../helperFunctions/customAxios";
import { useHistory } from 'react-router-dom';
import checkData from '../helperFunctions/checkData';
import getUser from '../helperFunctions/getUser';

let Register = () => {

  let user = getUser();
  let history = useHistory();
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");
  let [jobrole, setJobrole] = useState("");
  let [department, setDepartment] = useState("");
  let [address, setAddress] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  let handleSubmit = (e) => {
      e.preventDefault();

    setError("");
    setSuccess("");
    let data = {
      firstname, 
      lastname, 
      email, 
      password, 
      gender, 
      jobrole, 
      department,
      address,
    }

    let check = checkData(data);
      if ( check === null) {
        if ( user !== null && user.isadmin !== true ) {
              setError("Unauthorized!");
          } else {  
              axios.post("http://localhost:5000/api/auth/create-user", data).then((res) => {
              if (res.data.error ) {
                setError(res.data.message);
      
              } else {
                alert(res.data.data.message);
                history.push('/users');
              }
            });
          }
      } else {
        setError(check);
    }
  }

  return (    
    <div className="row mt-5">
      <div className="col-4"></div>
      <div className="col-4">
          <h1 className="m-5 text-center shadow-lg">Register</h1>
          <form className="bg-light p-5 mb-5" onSubmit={(e) => handleSubmit(e)}>
              <span className="text-danger">{error}</span>
              <span className="text-success">{success}</span>
              <div className="form-group">
                  <label>Firstname</label>
                  <input type="text" className="form-control" id="firstname" placeholder="John" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Lastname</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Doe" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="john.doe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Gender</label>
                  <input type="text" className="form-control" id="gender" placeholder="M" value={gender} onChange={(e) => setGender(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Jobrole</label>
                  <input type="text" className="form-control" id="jobrole" placeholder="Intern" value={jobrole} onChange={(e) => setJobrole(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Department</label>
                  <input type="text" className="form-control" id="department" placeholder="IT" value={department} onChange={(e) => setDepartment(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" id="address" placeholder="4,Street name" value={address} onChange={(e) => setAddress(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
      </div>
      <div className="col-4"></div>
    </div>)
}

export default Register;