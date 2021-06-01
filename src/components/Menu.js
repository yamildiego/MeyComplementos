import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Logo from './Logo';
import './styles/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <Navbar className="Menu" expand="lg" variant="dark" >
                <Container>
                    <a className="navbar-brand" href="/"><Logo /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="Menu-Navbar" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">
                                <FormattedMessage locale={this.props.lang} id="nav.home" />
                            </Link>
                            <Link className="nav-link" to="/products">
                                <FormattedMessage locale={this.props.lang} id="nav.products" />
                            </Link>
                            <Link className="nav-link" to="/contact-us">
                                <FormattedMessage locale={this.props.lang} id="nav.contact_us" />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang
    }
}

export default connect(mapStateToProps)(Menu);