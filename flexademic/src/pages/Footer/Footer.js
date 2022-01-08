import React from "react";

const Footer = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3">
          <h1>INFORMATION</h1>
          <ol type="number">
            <li>About us</li>
            <li>Our Stories</li>
            <li>My Account</li>
            <li>Our History</li>
            <li>Sprcialist Info</li>
          </ol>
        </div>
        <div className="col-md-3">
          <h1>STUDENT HELP</h1>
          <ol type="number">
            <li>My Info</li>
            <li>My Questions</li>
            <li>F.A.Q</li>
            <li>Serch Courses</li>
            <li>Latest Informations</li>
          </ol>
        </div>
        <div className="col-md-3">
          <h1>INSTAGRAM</h1>
        </div>
        <div className="col-md-3">
          <h1>CONTACT</h1>
          <p>
            PO Box UN152468, 1 Street North, New <br /> Towm, California, USA
          </p>
          <p>Phone : 5 (012) 4565 789</p>
          <p>Fax : 5 (012) 4565 789</p>
          <p>Email : Info@info.com</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src="https://i.ibb.co/zfC1ncq/logo-2-1.png" alt="" />
          This is Footer
        </div>
        <div className="col-md-4">
          <p>© All Rights Reserved. Powered By FlexaDemic</p>
        </div>
        <div className="col-md-4">
          <img src="https://i.ibb.co/Rv7YN4G/americancard.png" alt="" />
          <img src=" https://i.ibb.co/DLgQVTs/card.png" alt="" />
          <img src=" https://i.ibb.co/0MmQmqH/descoverycard.png" alt="" />
          <img src="https://i.ibb.co/8M40XjW/mastercard.png" alt="" />
          <img src="https://i.ibb.co/MnVZxcy/visacard.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
