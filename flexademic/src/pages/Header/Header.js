import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {

  // getting user from useAuth
  const { user, logout } = useFirebase();


  return (
    <Navbar bg="light" expand="lg">
      <Container Fluid>
        <Navbar.Brand href="#home">
          <h2 className="custom-banner ">FlexaDemic</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="menu-item" to="/home">Home</Link>
            <Link className="menu-item" to="/courses">Courses</Link>
            <Link className="menu-item" to="/events">Events</Link>
            <Link className="menu-item" to="/teachers">Teachers</Link>
            <Link className="menu-item" to="/students">Students</Link>
            <Link className="menu-item" to="/about">About US</Link>
            <Link className="menu-item" to="/contact">Contact Us</Link>
            <Link className="menu-item" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
