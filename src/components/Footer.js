import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles/Footer.css';
import Constants from './../config';

const Footer = (props) => {
    return (
        <Container className="Footer">
            <Navbar className="Footer-Menu" expand="lg" variant="dark">
                <Navbar.Collapse className="Footer-Navbar">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Productos</Link>
                        <Link className="nav-link" to="/medios-de-pago">Medios de pago</Link>
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="Copyright">
                © Copyright 2019 {Constants.urlVisible}.
            </div>
        </Container>
    )
}

export default Footer;