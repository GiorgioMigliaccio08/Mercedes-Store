import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&family=New+Tegomin&family=Reenie+Beanie&display=swap');
          .navbar-brand,
          .nav-link,
          .dropdown-item {
            font-family: "Maitree", serif;
              font-weight: 500;
              font-style: normal;
 
          }
        `}
      </style>
      <Navbar expand="lg" className="bg-body-primary">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Mercedes Store Logo"
            />{" "}
            Mercedes Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aquistaauto">
                Aquista Auto
              </Nav.Link>
              <NavDropdown title="Modelli" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/modelli">
                  AMG
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/modelli">
                  Berline
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Suv & Fuoristrada
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Station Wagon
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Compatte
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Coupè
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Cabrio / Roadster
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/modelli">
                  Monovolume
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
