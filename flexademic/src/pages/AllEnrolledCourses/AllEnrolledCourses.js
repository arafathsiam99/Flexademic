import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllEnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // fetch all enrolled courses 
    useEffect(() => {
        fetch('http://localhost:5000/all-enrolled-courses')
            .then(response => response.json())
            .then(res => setEnrolledCourses(res))
    }, [])


    return (
        <Container>
            <Row className="my-5">
                <h3>Total number of Enrolled Courses: {enrolledCourses.length}</h3>
                {
                    enrolledCourses.map( course =>
                        <Col md={4} key={course._id} className="my-3">
                            <div>
                                <h5>Course Info </h5>
                                <img style={{"height": "220px"}} className="img-fluid" src={`data:image/png;base64, ${course.courseImage}`} alt="" />
                                <h6>{course.courseId}</h6>
                                <h6>{course.courseTitle}</h6>
                            </div>
                            <div>
                                <h5>Student Info </h5>
                                <p>Email: {course.email} </p>
                                <p>Address: {course.address}</p>
                                <p>Mobile: {course.mobile}</p>
                            </div>
                        </Col>
                    
                    )
                }
            </Row>
        </Container>
    );
};

export default AllEnrolledCourses;