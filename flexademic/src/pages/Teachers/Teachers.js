import React, { useEffect, useState } from "react";
import "./Teachers.css";
function Teachers() {

  const [teachers, setTeachers] = useState([]);

  // fetch all teachers data
  useEffect(() => {
    fetch('https://intense-hamlet-45905.herokuapp.com/teachers')
    .then((response) => response.json())
    .then((response) => setTeachers(response))
  }, [])


  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
          {
            teachers.map((teacher) =>
            <div className="col shadow py-3" key={teacher._id}>
            <div className="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={`data:image/png;base64, ${teacher.image}`}
                className="card-img-top rounded-circle"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title">{teacher.name}</h5>
                <h5 className="card-title">{teacher.email}</h5>
                
              </div>
              <div className="  mx-auto">
                <span>
                  <i style={{ color: "#4267B2" }} className="fab fa-facebook"></i>
                </span>
                <span>
                  <i style={{ color: "#1da1f2" }} className="fab fa-twitter"></i>
                </span>
                <span>
                  <i style={{ color: "#bc2a8d" }} className="fab fa-instagram"></i>
                </span>
                <span>
                  <i style={{ color: "#FF0000" }} className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
            
            )
          }
          
          
         
        </div>
      </div>
    </div>
  );
}

export default Teachers;
