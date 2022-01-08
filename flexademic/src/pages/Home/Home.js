import React from "react";
import { Card, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <section>
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
      <div className="row">
        <h1>COURSE CATEGORIES</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>BUSINESS</Card.Title>
            <Card.Text>
              Business Trends changing with latest courses are available with
              us.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>ACCOUNTING</Card.Title>
            <Card.Text>
              Accounting need to be perfect. Come and join with us with best
              resources.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>SCIENCE & TECHNOLOGY</Card.Title>
            <Card.Text>
              Latest technologies online courses are available with new courses.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>HEALTH & PSYCHOLOGY</Card.Title>
            <Card.Text>
              Learn about the Health & Psychology with the complete
              presentation.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>FOOD & DRINKING</Card.Title>
            <Card.Text>
              Get the best eating education and practice by taking online
              courses.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>CREATIVE ARTS & MEDIA</Card.Title>
            <Card.Text>
              Come and explore your creative arts and media by going further.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="row">
        <h1>OUR COURSE</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="//i.ibb.co/ZMFDcpg/Side-view-of-a-female-Asian-IT-engineer-explaining-network-connections-in-a-server-to-a-novice-Afric.jpg"
          />
          <Card.Body>
            <Card.Title>REAL ESTATE LAW</Card.Title>
            <Card.Text>
              If you want to build a successful business online, watch the promo
              video to see why 13,000+ students are using this online
              entrepreneurship course to learn.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="//i.ibb.co/QkNsGkm/Man-using-calculator.jpg"
          />
          <Card.Body>
            <Card.Title>THE SECRETS OF ECONOMIC</Card.Title>
            <Card.Text>
              Personal time management skills are essential for professional &
              personal success in any area of life. Those able to successfully
              implement time management strategies
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="//i.ibb.co/jMtBR3h/photo-1509021436665-8f07dbf5bf1d.jpg"
          />
          <Card.Body>
            <Card.Title>NETWORKING MANAGEMENT</Card.Title>
            <Card.Text>
              Welcome to Logo Design fundamentals of building a great brand
              Logo. Our course teacher Lauren, walks you through his process of
              logo design.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Home;
