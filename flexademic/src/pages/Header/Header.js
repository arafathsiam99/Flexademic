import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="custom-banner ">FlexaDemic</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">Teachers</Nav.Link>
            <Nav.Link href="#link">Students</Nav.Link>
            <Nav.Link href="#link">About US</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
