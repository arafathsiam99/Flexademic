import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mystudents } from '../../Redux/dataSlice';

const Students = () => {
    // const [students, setStudents] = useState([]);
    const students = useSelector(state=>state.data.mystudents);
    const isload = useSelector((state) => state.data.isload);
 const Dispatch = useDispatch()
   
    // fetch all students data
  useEffect(() => {
    Dispatch(mystudents())
    
  }, [])


  if (isload) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
        <div
          class="spinner-border"
          style={{ width: "4rem ", height: "4rem" }}
          role="status"
        ></div>
      </div>
    );
  }

    return (
        <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
          {
            students.map((student) =>
            <div className="col shadow py-3" key={student._id}> 
            <div className="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={`data:image/png;base64, ${student.image}`}
                className="card-img-top rounded-circle"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <h5 className="card-title">{student.email}</h5>
                
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
};

export default Students;