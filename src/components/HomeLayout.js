import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/HomeLayout.css';

function HomeLayout(props) {
    return (
        <Container className="HomeLayout">
            <Row>
                <Col md={3}>
                    {props.menuLeft}
                </Col>
                <Col md={9}>
                    {props.main}
                </Col>
            </Row>
        </Container>
    )
}

export default HomeLayout;