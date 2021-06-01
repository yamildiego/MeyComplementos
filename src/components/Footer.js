import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './styles/Footer.css';
import Constants from './../config';

class Footer extends React.Component {
    render() {
        return (
            <Container className="Footer">
                <Navbar className="Footer-Menu" expand="lg" variant="dark">
                    <Navbar.Collapse className="Footer-Navbar">
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
                </Navbar>
                <div className="Copyright">
                    <FormattedMessage locale={this.props.lang} id="footer.copyright" />
                </div>
            </Container>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang
    }
}

export default connect(mapStateToProps)(Footer);