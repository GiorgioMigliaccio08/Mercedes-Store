import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/Logo.png";

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
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Aquista Auto</Nav.Link>
              <NavDropdown title="Modelli" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">AMG</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Berline</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Suv & Fuoristrada
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Station Wagon
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Compatte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Coupè</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Cabrio / Roadster
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">
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
