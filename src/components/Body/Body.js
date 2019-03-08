import React from 'react';
import { Container, Row, Col, CardGroup, Card, Nav } from 'react-bootstrap';
import MenuLeft from '../MenuLeft/MenuLeft'
import LayoutMain from '../LayoutMain/LayoutMain'
import './Body.css';

class Body extends React.Component {
    render() {
        return (
            <Container className="Body">
                <Row>
                    <Col md={3}>
                        <MenuLeft></MenuLeft>
                    </Col>
                    <Col md={9}><LayoutMain></LayoutMain></Col>
                </Row>
            </Container>
        )
    }
}

export default Body;