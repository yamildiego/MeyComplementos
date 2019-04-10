import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import formatNumber from './../utilities/formatNumber';
import './styles/ViewArticle.css';

class ViewArticle extends React.Component {
    state = { quantity: this.props.quantity }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.quantity != nextProps.quantity)
            this.setState({ quantity: nextProps.quantity });
    }
    handleClick = () => {
        this.props.handleRemoveItemById(this.props.item.id);
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <div>
                            <h2 className="float-left">
                                {this.props.item.title}
                            </h2>
                            {this.state.quantity > 0 &&
                                <span className="ViewArticleText">
                                    {
                                        this.state.quantity == 1
                                            ? "Ya se agrego uno al carrito!"
                                            : "Ya tienes " + this.state.quantity + " en el carrito!"
                                    }
                                </span>
                            }
                            <span className="ViewArticlePrice">{formatNumber(this.props.item.price)}</span>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <p><label>Colores</label> dasds</p>
                        <p><label>Descripción</label> sdsad</p>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <ButtonGroup>
                            <Button onClick={this.props.handleAddItem} variant="success">Agregar al carrito </Button>
                            {this.state.quantity > 0 &&
                                <Button onClick={this.handleClick} variant="danger">Eliminar del carrito </Button>
                            }
                        </ButtonGroup>
                        <ButtonGroup className="float-right">
                            <Button onClick={this.props.closeModal} variant="warning" >Cerrar</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ViewArticle;