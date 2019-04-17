import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './../components/ContactForm';
import './../components/styles/Contact.css'

const Contact = () => (
    <Container className="Contact">
        <Row>
            <Col md={2}>
            </Col>
            <Col md={8}>
                <div className="ContactPage">
                    <h1>Contacto</h1>
                    <ContactForm />
                </div>
            </Col>
        </Row>
    </Container>
)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)


export default Contact;