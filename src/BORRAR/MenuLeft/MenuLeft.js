import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './MenuLeft.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuLeft extends React.Component {
    render() {
        return (
            <div className="MenuLeft">
                <p className="lead">Categorías</p>
                {
                    this.props.categories.map((item) => {
                        return <Article key={item.id} {...item}></Article>
                    })
                }
                <ListGroup className="category">
                    <ListGroup.Item className="active">Calzas</ListGroup.Item>
                    <ListGroup.Item>Ropa interior</ListGroup.Item>
                    <ListGroup.Item>Remeras</ListGroup.Item>
                    <ListGroup.Item>Calzado</ListGroup.Item>
                    <ListGroup.Item>Dada</ListGroup.Item>
                </ListGroup>
                <ListGroup className="shopping">
                    <ListGroup.Item className="line">
                        <div className="name">
                            <FontAwesomeIcon icon="check-circle" color="green" />
                            Das
                        </div>
                        <div className="amount">
                            $ 23.09
                            <FontAwesomeIcon icon="times" />
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="line">
                        <div className="name">
                            <FontAwesomeIcon icon="check-circle" color="green" />
                            Aca
                        </div>
                        <div className="amount">
                            $ 13.00
                            <FontAwesomeIcon icon="times" />
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="total">
                        <div className="name">
                            Total
                        </div>
                        <div className="amount">
                            $ 36.09
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant="info" className="buy w-100">Comprar</Button>
                    </ListGroup.Item>
                </ListGroup>

            </div>)
    }
}

export default MenuLeft;