import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router';


const AddCourseContent = () => {
    // courseId 
    const {courseId} = useParams();

    // receiving information from form
    const content1Ref = useRef();
    const content2Ref = useRef();
    const content3Ref = useRef();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/my-courses';

    // handle course content
    const handleCourseContent = (e) => {
        e.preventDefault();
        const content1 = content1Ref.current.value;
        content1Ref.current.value = "";
        const content2 = content2Ref.current.value;
        content2Ref.current.value = "";
        const content3 = content3Ref.current.value;
        content3Ref.current.value = "";
    
        const formData = new FormData();
        formData.append('content1', content1);
        formData.append('content2', content2);
        formData.append('content3', content3);

        fetch(`https://intense-hamlet-45905.herokuapp.com/course/${courseId}/content`, {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(result=> {
            if (result.insertedId) {
                alert('course content added successfully');
                history.push(redirectUrl);
            }
          })
          .catch(err => {
            console.log("error:", err);
          })
      };
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6">
                    <h2 className="text-center my-3">Add Course Content Url Embedded Id only</h2>
                    <form action="" onSubmit={handleCourseContent}>
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Content-1"
                        ref={content1Ref} required
                        />
                        <label >Content-1</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Content-2"
                        ref={content2Ref} required
                        />
                        <label >Content-2</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Content-3"
                        ref={content3Ref} required
                        />
                        <label>Content-3</label>
                    </div>
                    
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary w-100" type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </Row>
        </Container>
    );
};

export default AddCourseContent;