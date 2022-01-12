import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./AddCourse.css";


function AddCourse() {
  // getting user from useAuth
  const { user } = useFirebase();
  // userInfo state to store user information
  const [userInfo, setUserInfo] = useState({});
  const email = user.email;

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/my-courses';

  // fetching user data
  useEffect(() => {
      fetch(`https://intense-hamlet-45905.herokuapp.com/user/${email}`)
      .then(res => res.json())
          .then(data => {
            setUserInfo(data);
            console.log(data);
          })
    }, [email])


  const [image, setImage] = useState(null);
  const titleRef = useRef();
  const feesRef = useRef();
  const durationRef = useRef();
  const descriptionRef = useRef();

  // handle add course 
  const handleAddCourse = (e) => {
    e.preventDefault();
    const creatorName = userInfo.name;
    const creatorEmail = user.email;
    const title = titleRef.current.value;
    titleRef.current.value = "";
    const description = descriptionRef.current.value;
    descriptionRef.current.value = "";
    const fees = feesRef.current.value;
    feesRef.current.value = "";
    const duration = durationRef.current.value;
    durationRef.current.value = "";

    const formData = new FormData();

    formData.append('creatorName', creatorName);
    formData.append('creatorEmail', creatorEmail);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('fees', fees);
    formData.append('duration', duration);
    formData.append('image', image);

    fetch('https://intense-hamlet-45905.herokuapp.com/add-course', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
      .then(res=> {
        if (res.insertedId) {
          alert('New course added successfully');
          history.push(redirectUrl);
      }
      })
      .catch(err => {
        console.log("error:", err);
      })
  };


  return (
    <div>
      <div className="container d-flex justify-content-center flex-row">
        <div className="row w-50 add_course_style">
          <h1 className="text-center">Add A New Course</h1>
          <form action="" className="" onSubmit={handleAddCourse}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                ref={titleRef}
              />
              <label >Title</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                ref={descriptionRef}
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              ></textarea>
              <label>Course Description</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Course Fee"
                ref={feesRef}
              />
              <label>Fees</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Course Duration"
                ref={durationRef}
              />
              <label>Duration</label>
            </div>
            <div className="form-floating">
            <input
                  type="file"
                  className="form-control"
                  placeholder="image" 
                  accept="image/*"
                  required
                  onChange={e => setImage(e.target.files[0])}
                />
            </div>
            <div className="mt-3">
              
              <button className="btn btn-primary w-100" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
