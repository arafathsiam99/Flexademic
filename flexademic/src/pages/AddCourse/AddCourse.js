import React, { useRef } from "react";
import "./AddCourse.css";
function AddCourse() {
  const titleRef = useRef();
  const feesRef = useRef();
  const durationRef = useRef();
  const imageUrlRef = useRef();
  const descriptionRef = useRef();
  const handleAddCourse = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    titleRef.current.value = "";
    const fees = feesRef.current.value;
    feesRef.current.value = "";
    const duration = durationRef.current.value;
    durationRef.current.value = "";
    const image = imageUrlRef.current.value;
    imageUrlRef.current.value = "";
    const description = descriptionRef.current.value;
    descriptionRef.current.value = "";
    const newData = { title, fees, duration, image, description };

  };
  return (
    <div>
      <div className="container d-flex justify-content-center flex-row">
        <div className="row w-50 add_course_style">
          <h1 className="text-center">Add A New Course</h1>
          <form action="" className="" onSubmit={handleAddCourse}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                ref={titleRef}
              />
              <label for="floatingInput">Title</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref={feesRef}
              />
              <label for="floatingPassword">Fees</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref={durationRef}
              />
              <label for="floatingPassword">Duration</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref={imageUrlRef}
              />
              <label for="floatingPassword">Image Url</label>
            </div>
            <div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  ref={descriptionRef}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Course Description</label>
              </div>
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
