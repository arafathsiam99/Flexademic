import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-courses`)
        .then(res => res.json())
            .then(data => {
              
                setCourses(data);
              console.log(data);
            })
      }, [])

    return (
        <Container>
            <Row>

                <h3> number of courses:  {courses.length} </h3>
               {
                   courses.map(c =>  
                   
                   <Col md={4}
                    key={c._id}
                   
                   >
                    <img className="img-fluid" src={`data:image/png;base64, ${c.image}`} alt="" />
                    <h3> {c.title}</h3>
                    <p> {c.description} </p>
                    <p> {c.fees} </p>
                    <p> {c.duration} </p>
                    <Link to="/"><button>Enroll</button></Link>
                </Col> )
               }
            </Row>
        </Container>
    );
};

export default Courses;