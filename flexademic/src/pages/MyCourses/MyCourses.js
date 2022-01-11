import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const MyCourses = () => {

    const { user } = useFirebase();
    const email = user.email;
  
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course/${email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data.length);
                setMyCourses(data);
            })
      }, [email])
    return (
        <Container>
            <Row>
            {
                   myCourses.map(c =>  
                   
                   <Col md={4}
                    key={c._id}
                   >
                    <img className="img-fluid" src={`data:image/png;base64, ${c.image}`} alt="" />
                    <h3> {c.title}</h3>
                    <p> {c.description} </p>
                    <p> {c.fees} </p>
                    <p> {c.duration} </p>
                    <Link to={`/add-course-content/${c._id}`}><button>Add Course Content</button></Link>
                    <Link to={`/get-course-content/${c._id}`}><button>view Course Content</button></Link>

                </Col> )
               }
            </Row>
        </Container>
    );
};

export default MyCourses;