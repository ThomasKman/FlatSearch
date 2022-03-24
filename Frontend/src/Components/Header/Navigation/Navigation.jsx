import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import ramsay from "../../../static/Images/ramsay.jpg";

//anmelden / Registrieren je nach anmelde status

const Navigation = (props) => {
  return (
    <div className="nav-bar">
      <Navbar>
        <Container>
          <div>
            <Navbar.Brand href="/">Suche</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            {props.login ? (
              <>
                <Nav.Link href="/ramsay">
                  <img className="ramsay" alt="lambsauce" src={ramsay} />
                </Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href="#home">Anmeldung / Registrieren</Nav.Link>
            )}

            {/* <Nav.Link href="#features">Anmelden</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
