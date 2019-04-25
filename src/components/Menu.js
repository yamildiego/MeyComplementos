import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from './Logo';
import './styles/Menu.css';

function Menu() {
    return (
        <Navbar className="Menu" expand="lg" variant="dark">
            <Container>
                <a className="navbar-brand" href="/"><Logo /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="Menu-Navbar" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Productos</Link>
                        <Link className="nav-link" to="/medios-de-pago">Medios de pago</Link>
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;