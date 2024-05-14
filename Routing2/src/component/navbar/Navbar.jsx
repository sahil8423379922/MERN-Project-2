import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Navigation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
