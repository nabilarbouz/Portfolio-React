import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./Home";
import Contact from "./Contact";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Nabil Arbouz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              href="https://github.com/nabilarbouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
};

export default MyNavbar;
