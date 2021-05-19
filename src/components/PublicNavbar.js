import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
