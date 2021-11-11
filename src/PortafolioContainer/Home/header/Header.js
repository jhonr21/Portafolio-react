import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import './Header.css'


const Header = () => {
    return (  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Menu</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Hola </Nav.Link>
        <Nav.Link href="#link">Proyecto</Nav.Link>
        <Nav.Link href="#link2">Testimonios</Nav.Link>
        <Nav.Link href="#link3">Contactenos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
 
export default Header;