import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import img from "../../images/login.jpg";
import './Login.css'
const Login = () => {
  const {login,error}=useFirebase()
  const history= useHistory()
  const location= useLocation()
  const emailRef=useRef()
  const passwordRef=useRef()
  const handleLogin=(e)=>{
   e.preventDefault()
   const email=emailRef.current.value;
   emailRef.current.value=""
   const password=passwordRef.current.value;
   passwordRef.current.value="";
   const newData={email, password}
   login(newData.email, newData.password, history, location)
  }
  return (
    <div>
      <div className="container ">
        <div className="row login_style">
          <div className="col-md-6">
            <img className="w-100" src={img}></img>
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={handleLogin}>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                ref={emailRef}
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              <label for="floatingPassword">Password</label>

            </div>
            <div className="mt-5 text-center">
              {
                error && <p className="text-danger">{error}</p>
              }
                <button className="btn btn-primary w-100" >Login</button>
                <p>Have You Registerd?<Link to="register">Register</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
