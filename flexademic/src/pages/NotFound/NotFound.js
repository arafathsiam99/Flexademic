import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <img className="img-fluid" src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;