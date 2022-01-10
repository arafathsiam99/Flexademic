import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <section className="container-fluid">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PQr74jj/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/K6bcR6C/cambridge.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/BBCD2qn/photo-1527689368864-3a821dbccc34.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* OUR COURSE */}
      <div className="row text-center">
        <h1>OUR COURSE</h1>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="//i.ibb.co/ZMFDcpg/Side-view-of-a-female-Asian-IT-engineer-explaining-network-connections-in-a-server-to-a-novice-Afric.jpg"
            />
            <Card.Body>
              <Card.Title className="custom-text">REAL ESTATE LAW</Card.Title>
              <Card.Text>
                If you want to build a successful business online, watch the
                promo video to see why 13,000+ students are using this online
                entrepreneurship course to learn.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="//i.ibb.co/QkNsGkm/Man-using-calculator.jpg"
            />
            <Card.Body>
              <Card.Title className="custom-text">
                THE SECRETS OF ECONOMIC
              </Card.Title>
              <Card.Text>
                Personal time management skills are essential for professional &
                personal success in any area of life. Those able to successfully
                implement time management strategies
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="//i.ibb.co/jMtBR3h/photo-1509021436665-8f07dbf5bf1d.jpg"
            />
            <Card.Body>
              <Card.Title className="custom-text">
                NETWORKING MANAGEMENT
              </Card.Title>
              <Card.Text>
                Welcome to Logo Design fundamentals of building a great brand
                Logo. Our course teacher Lauren, walks you through his process
                of logo design.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* OUR GALLERY */}
        <h1>OUR GALLERY</h1>
        <div className="row">
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/4d17FnD/pexels-photo-2781814.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/5GMHFYX/pexels-photo-7972359.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/8MXwtCx/Father-and-son-going-to-kindergarten.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/YLPxcjS/Group-of-kids-return-to-school-during-the-pandemic.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/N77qTCx/Young-student-watching-lesson-online-and-studying-from-home-Girl-using-laptop-for-online-lessons-Hom.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 container">
            <div className="overlay">
              <img
                src="https://i.ibb.co/rGMSSvy/Happy-African-American-student-raising-her-hand-to-ask-a-question-during-lecture-in-the-classroom.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Counter Section */}
        <div className="row mt-5 mb-5 custom-back">
          <div className="col-md-3">
            <i className="fas fa-users custom-sticker"></i>
            <h3>94,532</h3>
            <p>FOREIGN FOLLOWERS</p>
          </div>
          <div className="col-md-3">
            <i class="fas fa-book-open"></i>
            <h3>11,223</h3>
            <p>CLASSES COMPLETE</p>
          </div>
          <div className="col-md-3">
            <i class="fas fa-trophy"></i>
            <h3>282,673</h3>
            <p>STUDENTS ENROLLED</p>
          </div>
          <div className="col-md-3">
            <i class="fas fa-user-check"></i>
            <h3>370</h3>
            <p>CERTIFIED TEACHERS</p>
          </div>
        </div>

        {/* Teacher */}
        <div className="row text-center">
          <h1>FACULTY MEMBER</h1>
          <div className="col-md-4 ">
            <Card>
              <Card.Img
                variant="top"
                src="//i.ibb.co/YXq73q7/Smiling-indian-business-man-working-on-laptop-at-home-office-Young-indian-student-or-remote-teacher.jpg"
              />
              <Card.Body>
                <Card.Title className="custom-text">Simon Grishaber</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Language Teacher
                </Card.Subtitle>
                <Card.Text>
                  Welcome to Logo Design fundamentals of building a great brand
                  Logo. Our course teacher Lauren, walks you through his process
                  of logo design.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img
                variant="top"
                src="//i.ibb.co/BnD5m0z/Happy-mature-teacher-and-female-students-reading-from-text-book-at-university-hallway.jpg"
              />
              <Card.Body>
                <Card.Title className="custom-text">Danny Morrison</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Manager
                </Card.Subtitle>
                <Card.Text>
                  Welcome to Logo Design fundamentals of building a great brand
                  Logo. Our course teacher Lauren, walks you through his process
                  of logo design.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/J21Ggfq/lockdown-pandemia-people-wearing-mask.jpg"
              />
              <Card.Body>
                <Card.Title className="custom-text">Alexandro Flora</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Health Teacher
                </Card.Subtitle>
                <Card.Text>
                  Welcome to Logo Design fundamentals of building a great brand
                  Logo. Our course teacher Lauren, walks you through his process
                  of logo design.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5 mb-5">
        <h1 className="text-center">OUR TESTIMONIALS</h1>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/DfHbsGn/Handsome-mid-adult-man-with-beard-standing-with-crossed-hands-and-looking-at-camera-Mature-middle-ea.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card></Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/frP5t0z/Middle-aged-man-portrait-at-sunset.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card></Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/n04tpSd/A-smiling-African-American-man-stands-in-front-of-a-blue-wall-wearing-nice-casual-clothing-Positive.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card></Card>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="subscription custom-bg mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-center my-5 ms-5">
              <input type="text" placeholder="Your Name" /> <br />
              <input type="email" placeholder="Your Email" /> <br /> <br />
              <input type="submit" />
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
