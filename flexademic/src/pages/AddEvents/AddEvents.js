import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

const AddEvents = () => {
    // received form data
    const titleRef = useRef();
    const descriptionRef = useRef();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/events';

    // handle events
    const handleAddEvents = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        titleRef.current.value = "";
        const description = descriptionRef.current.value;
        descriptionRef.current.value = "";
        
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        fetch('http://localhost:5000/add/news-events', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(result=> {
            if (result.insertedId) {
                alert('events added successfully');
                history.push(redirectUrl);
            }
          })
          .catch(err => {
            console.log("error:", err);
          })
    
      };

    return (
        <Container>
            <Row className="my-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h2>Add New Events</h2>
                    <form action="" onSubmit={handleAddEvents}>
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        ref={titleRef} required
                        />
                        <label >Title</label>
                    </div>
                    
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            ref={descriptionRef}
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                        ></textarea>
                        <label>Course Description</label>
                    </div>
                    
                    
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary w-100">Submit</button>
                    
                    </div>
                    </form>
                </div>
            </Row>
        </Container>
    );
};

export default AddEvents;