import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="nav-bar">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
