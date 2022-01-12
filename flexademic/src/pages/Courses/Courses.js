import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mycourses } from "../../Redux/dataSlice";

const Courses = () => {
  // const [courses, setCourses] = useState([]);
  const courses = useSelector((state) => state.data.mycourses);
  const Dispatch = useDispatch();

  // fetch courses
  useEffect(() => {
    Dispatch(mycourses());
  }, []);

  return (
    <Container>
      <Row className="my-5">
        {courses.map((c) => (
          <Col md={4} className="my-3" key={c._id}>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src={`data:image/png;base64, ${c.image}`}
              />
              <Card.Body>
                <Card.Title className="custom-text">
                  <h3> {c.title}</h3>
                </Card.Title>
                <Card.Text>
                  <p> {c.description.slice(0, 110)} </p>
                  <p>$ {c.fees} </p>
                  <p>Duration: {c.duration} Month</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to={`/course-enroll/${c._id}`}>
                  <button className="btn btn-dark w-100">Enroll</button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
