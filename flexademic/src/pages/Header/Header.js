import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {

  // getting user from useAuth
  const { user, logout } = useFirebase();
  const [userInfo, setUserInfo] = useState({});
  const email = user.email;

  useEffect(() => {
    fetch(`https://intense-hamlet-45905.herokuapp.com/user/${email}`)
    .then(res => res.json())
        .then(data => {
          setUserInfo(data);
          console.log(data);
        })
  }, [email])


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
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
            <Link className="menu-item" to="/about">About</Link>
            <Link className="menu-item" to="/contact">Contact</Link>
            { !user?.email && 
                        <NavLink className="menu-item" to="/login"> <i className="fas fa-sign-in-alt"></i> Login</NavLink>
                    }
          </Nav>
          {
            user?.email && 
            <Nav className="mr-auto">
            {/* showing logout login button and user name  */}
                
                { userInfo.userType==='admin' &&
                  <NavDropdown className="menu-item" title="Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link className="menu-item" to="/add-course">Add Course</Link>  </NavDropdown.Item>
                    <NavDropdown.Item><Link className="menu-item" to="/all-courses">All Courses</Link>  </NavDropdown.Item>
                    <NavDropdown.Item><Link className="menu-item" to="/my-courses">My Courses</Link>  </NavDropdown.Item>
                    <NavDropdown.Item><Link className="menu-item" to="/all-enrolled-courses">All Enrolled Courses</Link>  </NavDropdown.Item>
                    <NavDropdown.Item><Link className="menu-item" to="/add-events">Add Events</Link>  </NavDropdown.Item>

                  </NavDropdown>
                }
                { userInfo.userType==='Teacher' &&
                  <NavDropdown className="menu-item" title="Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link className="menu-item" to="/add-course">Add Course</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="menu-item" to="/my-courses">My Courses</Link></NavDropdown.Item>
                  </NavDropdown>
                }
                { userInfo.userType==='Student' &&
                  <NavDropdown className="menu-item" title="Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link className="menu-item" to="/my-enrolled-course">My Courses</Link></NavDropdown.Item>

                  </NavDropdown>
                }
                
                { user?.email &&
                    <NavLink className="menu-item" onClick={logout} to="/home"><i className="fas fa-sign-out-alt"></i> LogOut</NavLink>
                }
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
