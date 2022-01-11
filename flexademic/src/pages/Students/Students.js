import React, { useEffect, useState } from 'react';

const Students = () => {
    const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/students')
    .then((response) => response.json())
    .then((response) => setStudents(response))
  }, [])

    return (
        <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-3">
          {
            students.map((student) =>
            <div class="col shadow py-3">
            <div class="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={`data:image/png;base64, ${student.image}`}
                class="card-img-top rounded-circle"
                alt="#"
              />
              <div class="card-body">
                <h5 class="card-title">{student.name}</h5>
                <h5 class="card-title">{student.email}</h5>
                
              </div>
              <div className="  mx-auto">
                <span>
                  <i style={{ color: "#4267B2" }} class="fab fa-facebook"></i>
                </span>
                <span>
                  <i style={{ color: "#1da1f2" }} class="fab fa-twitter"></i>
                </span>
                <span>
                  <i style={{ color: "#bc2a8d" }} class="fab fa-instagram"></i>
                </span>
                <span>
                  <i style={{ color: "#FF0000" }} class="fab fa-youtube"></i>
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
};

export default Students;