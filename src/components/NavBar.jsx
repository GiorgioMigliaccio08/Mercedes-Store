import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">Mercedes Store </Navbar.Brand>
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
              <NavDropdown.Item href="#action/3.8">Monovolume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
