import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import './Header.css'


const Header = () => {
    return (  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#saludo">Saludos </Nav.Link>
        <Nav.Link href="#proyectos">Proyecto</Nav.Link>
        <Nav.Link href="#servicio">Servicios</Nav.Link>
        <Nav.Link href="#testimonio">Testimonios</Nav.Link>
        <Nav.Link href="#contacto">Contactenos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
 
export default Header;