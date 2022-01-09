import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import img from "../../images/registration.svg";
const Register = () => {
  const { registration } = useFirebase();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    nameRef.current.value = "";
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passwordRef.current.value;
    passwordRef.current.value = "";
    const newData = { name, email, password };
    registration(newData.name, newData.email, newData.password);
  };
  return (
    <div>
      <div className="container">
        <div className="row login_style">
          <div className="col-md-6">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={handleRegistration}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Full Name"
                  ref={nameRef}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={emailRef}
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
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary w-100">Submit</button>
                <p>
                  Have You Already Registerd?<Link to="login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
