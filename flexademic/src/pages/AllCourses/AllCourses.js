import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-courses`)
        .then(res => res.json())
            .then(data => {
                setCourses(data);
              console.log(data);
            })
      }, [])


      // DELETE  order
     const handleDeleteCourse = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/course/${id}`;

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
        }
    }


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
                    <button className="btn btn-danger" onClick={() => handleDeleteCourse(c._id)}>delete</button>
                </Col> )
               }
            </Row>
        </Container>
    );
};

export default AllCourses;