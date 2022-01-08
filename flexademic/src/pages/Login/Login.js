import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.jpg";
import './Login.css'
const Login = () => {
  return (
    <div>
      <div className="container border border-secondary">
        <div className="row border border-primary login_style">
          <div className="col-md-6">
            <img className="w-100" src={login}></img>
          </div>
          <div className="col-md-6">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>

            </div>
            <div className="mt-5 text-center">
                <button className="btn btn-primary w-100" >Login</button>
                <p>Have You Registerd?<Link to="register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
