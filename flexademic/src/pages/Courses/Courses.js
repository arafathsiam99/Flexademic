import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    // fetch courses
    useEffect(() => {
        fetch(`https://intense-hamlet-45905.herokuapp.com/all-courses`)
        .then(res => res.json())
            .then(data => {
              
                setCourses(data);
              console.log(data);
            })
      }, [])

    return (
        <Container>
            <Row className="my-5">

               {
                   courses.map(c =>  
                   
                   <Col md={4} className="my-3"
                    key={c._id}
                   
                   >

                    <Card>
                        <Card.Img
                            variant="top"
                            style={{'height': '250px'}}
                            src={`data:image/png;base64, ${c.image}`}
                        />
                        <Card.Body>
                            <Card.Title className="custom-text">
                            <h3> {c.title}</h3>
                            </Card.Title>
                            <Card.Text>
                                <p> {c.description} </p>
                                <p> {c.fees} </p>
                                <p> {c.duration} </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to={`/course-enroll/${c._id}`}><button className="btn btn-primary">Enroll</button></Link>

                        </Card.Footer>
                    </Card>
                </Col> )
               }
            </Row>
        </Container>
    );
};

export default Courses;