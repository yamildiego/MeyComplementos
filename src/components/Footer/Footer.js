import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <Container>
                    <Navbar className="Menu-Footer" expand="lg" variant="dark">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Productos</Nav.Link>
                                <Nav.Link href="#link">Medios de pago</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div className="yd">
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
                    </div>
                    <div className="clear"></div>
                    <div className="copyright">Copyright © Mey 2019. Todos los derechos reservados.</div>
                </Container>
            </div>
        )
    }
}

export default Footer;