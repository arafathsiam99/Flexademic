import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseContent = () => {
    const {courseId} = useParams();
    const [courseContent, setCourseContent] = useState([]);

    // get courses content
    useEffect(() => {
        fetch(`https://intense-hamlet-45905.herokuapp.com/course/${courseId}/content`)
        .then(response => response.json())
        .then(data =>{ setCourseContent(data)
            console.log(courseContent.content1);
        
        })
    }, [courseId])
    
    return (
        <Container>
            <Row>
                <Col md={12}> 
                    <div>
                        <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${courseContent.content1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col md={12}> 
                    <div>
                        <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${courseContent.content2}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col md={12}> 
                    <div>
                        <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${courseContent.content3}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseContent;