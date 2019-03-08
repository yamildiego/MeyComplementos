import React from 'react';
import { Container, Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';
import Logo from '../Logo/Logo'
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <Navbar className="Menu" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Productos</Nav.Link>
                            <Nav.Link href="#link">Medios de pago</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Menu;