import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import img from "../../images/registration.svg";


const Register = () => {
  const { registration } = useFirebase();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [image, setImage] = useState(null);
  const userTypeRef = useRef();


  const handleRegistration = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    nameRef.current.value = "";
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passwordRef.current.value;
    passwordRef.current.value = "";

    const userType = userTypeRef.current.value;
    userTypeRef.current.value = "";

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);
    formData.append('userType', userType);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result=> {
        console.log("success:", result);
      })
      .catch(err => {
        console.log("error:", err);
      })

    const newData = { name, email, password};
    console.log(newData);
    
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
                  ref={nameRef} required
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={emailRef} required
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={passwordRef} required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="floatingInput"
                  placeholder="image" 
                  accept="image/*"
                  required
                  onChange={e => setImage(e.target.files[0])}
                />
              </div>
              <div class="form-floating mb-3">
                <select name="" id="" class="form-control" required 
                  ref={userTypeRef}
                >
                  <option value="" disabled>Select User Type</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary w-100">Submit</button>
                <p>
                  Have You Already Registered?<Link to="login">Login</Link>
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
