import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const MyEnrolledCourses = () => {
    const {user} = useFirebase();
    const email = user.email;
    console.log(email);
    const [myEnrolledCourses, setMyEnrolledCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course-enrolled/${email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data.length);
                setMyEnrolledCourses(data);
            })
      }, [email])

      console.log(myEnrolledCourses);
    return (
        <Container>
            <Row>
            <h3>Number Of Enrolled Courses: {myEnrolledCourses.length}</h3>
            {
                myEnrolledCourses.map(c =>  
                   
                   <Col md={4}
                        key={c._id}
                    >
                        <img className="img-fluid" src={`data:image/png;base64, ${c.courseImage}`} alt="" />
                        <h3> {c.courseTitle}</h3>
                        <p> {c.courseDescription}</p>
                        <Link to={`/get-course-content/${c.courseId}`}><button>view Course Content</button></Link>
                    </Col> )
               }
            </Row>
        </Container>
    );
};

export default MyEnrolledCourses;