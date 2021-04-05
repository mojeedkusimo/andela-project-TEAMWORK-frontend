import { useState, useContext } from "react";
import axios from "../helperFunctions/customAxios";
import { useHistory } from 'react-router-dom';
import checkData from '../helperFunctions/checkData';
import getUser from '../helperFunctions/getUser';

export const Register = () => {

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
        if ( check !== null && user.isadmin !== true ) {
              setError("Unauthorized!");
          } else {  
              axios.post('/auth/create-user' ,data).then((res) => {
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
      <div className="col"></div>
        <div className="col-8 shadow mx-3 my-5">
          <h1 className="text-center pt-3 action-header">Register</h1>
          <form className="p-2" onSubmit={(e) => handleSubmit(e)}>
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
                <label>Confirm Password</label>
                <input type="password" className="form-control" id="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group row">
                <label for="gender" className="col-4 col-md-2 col-form-label">Gender</label>
                <div className="col-5 col-md-8">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="male" id="maleLabel" value="male" />
                    <label class="form-check-label" for="maleLabel">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="female" id="femaleLabel" value="female" />
                    <label class="form-check-label" for="femaleLabel">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Job role</label>
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
        <div className="col"></div>
    </div>)
}
