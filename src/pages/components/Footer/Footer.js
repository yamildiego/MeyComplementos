import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <Container>
                <Navbar className="Footer-Menu" expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="Footer-Navbar" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Productos</Link>
                            <Link className="nav-link" to="/medios-de-pago">Medios de pago</Link>
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* <div className="Footer-yd">
                        <div className="texts">
                            <div className="text">
                                Desarrollado por
                        </div>
                            <div className="text">
                                Yamil Diego
                        </div>
                        </div>
                        <div className="photo">
                            <Image src="./images/yd.jpg" roundedCircle></Image>
                        </div>
                    </div> */}
                {/* <div className="clear"></div> */}
                {/* <div className="copyright">Copyright © Mey 2019. Todos los derechos reservados.</div> */}
            </Container>
        </div>
    )
}

export default Footer;