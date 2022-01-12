import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllCourses = () => {
    // all courses state 
    const [courses, setCourses] = useState([]);

    // fetching all courses data
    useEffect(() => {
        fetch(`https://intense-hamlet-45905.herokuapp.com/all-courses`)
        .then(res => res.json())
            .then(data => {
                setCourses(data);
              console.log(data);
            })
      }, [])



    // DELETE course
    const handleDeleteCourse = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://intense-hamlet-45905.herokuapp.com/course-delete/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingCourses = courses.filter(orders => orders._id !== id);
                    setCourses(remainingCourses);
                }
            });
    }}


    return (
        <Container>
            <Row>

                <h3> number of courses:  {courses.length} </h3>
               {
                   courses.map(c =>  
                   
                   <Col md={4} className="my-3"
                    key={c._id}
                   
                   >
                    <img style={{"height": "220px"}} className="img-fluid" src={`data:image/png;base64, ${c.image}`} alt="" />
                    <h3> {c.title}</h3>
                    <p> {c.description} </p>
                    <p>$ {c.fees} </p>
                    <p>Duration: {c.duration} Month</p>
                    <button className="btn btn-danger" onClick={() => handleDeleteCourse(c._id)}>delete</button>
                </Col> )
               }
            </Row>
        </Container>
    );
};

export default AllCourses;