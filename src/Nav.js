import React from "react";
import "./index.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar>
      <Container id="navb" fluid>
        <Navbar.Brand>THE GROUP PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="justify-content-end">
          <Link id="link" to="/">
            <li>Home </li>
          </Link>
          <Link id="link" to="/learn">
            <li>Learn More</li>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
