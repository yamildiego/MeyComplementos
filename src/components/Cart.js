import React from 'react';
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Cart.css';
import formatNumber from './../utilities/formatNumber';

class Cart extends React.Component {
    handleClick = item => {
        this.props.handleRemoveItemById(item.idProduct);
    }
    render() {
        return (
            <ListGroup className="Cart">
                {
                    this.props.cartItems.map((item) => {
                        return (
                            <ListGroup.Item key={item.id} >
                                <FontAwesomeIcon className="CartCheck" icon="check-circle" color="green" />
                                <span>
                                    {item.title} <span className="font-weight-bold">X{item.quantity}</span>
                                </span>
                                <FontAwesomeIcon onClick={() => this.handleClick(item)} className="CartRemove" icon="times" color="grey" />
                                <span className="float-right CartPrice">{formatNumber(item.price)}</span>
                            </ListGroup.Item>
                        )
                    })
                }
                {
                    (this.props.cartItems != undefined && this.props.cartItems.length > 0) &&
                    <ListGroup.Item className="CartTotal">
                        <span>Total</span>
                        <span className="float-right">{formatNumber(this.props.total)}</span>
                    </ListGroup.Item>
                }
            </ListGroup>
        )
    }
}

export default Cart;