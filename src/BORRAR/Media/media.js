import React, { Component } from 'react';
import './media.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Row, Col, Container } from 'react-bootstrap';


class Media extends Component {

        // state = {
    //     title: this.props.title
    // }
    //
    // handleClick = (event) => {
    //     console.error(event);
    //     console.error(this.state.title);
    //     this.setState({ title: 'probando' });
    // }
    // onClick={this.handleClick}
    render() {
        const styles = {
            container: {
                //         fontSize: 20,
                //         backgroundColor: 'blue',
                //         color: '#666',
                //         cursor: 'pointer',
                //         width: '20%',
                //         height: '205',
                //         border: '1px solid red',
                //         float: 'left',
                //         marginLeft: '1rem'
            }
        }
        // style={styles.container}
        return (
            <Container>
                <Row>
                    <Col>
                        1 of 3
                        {/* <div className="Media" >
                            <div>
                                <img src="./images/test.jpg" alt="" width={260} height={160} />
                                <h3>AA numero 1</h3>
                                <p>Texto numero 2</p>
                            </div>
                        </div> */}
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
}

export default Media;