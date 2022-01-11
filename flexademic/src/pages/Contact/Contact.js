import React from 'react';

const Contact = () => {
    return (
        <div className="container">
        <div className="row login_style d-flex justify-content-center align-items-center my-5">
          
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <form action="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
                <label >Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label >Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                />
                <label >Message</label>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;