import React from 'react';
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cart.css';

class Cart extends React.Component {
    handleClick = item => {
        this.props.handleRemoveItem(item);
    }
    render() {
        return (
            <ListGroup className="Cart">
                {
                    this.props.cartItems.map((item) => {
                        return (
                            <ListGroup.Item key={item.id} >
                                <FontAwesomeIcon className="CartCheck" icon="check-circle" color="green" />
                                <span>{item.title}</span>
                                <FontAwesomeIcon onClick={() => this.handleClick(item)} className="CartRemove" icon="times" color="grey" />
                                <span className="float-right">$ {item.price}</span>
                            </ListGroup.Item>
                        )
                    })
                }
                {
                    (this.props.cartItems != undefined && this.props.cartItems.length > 0) &&
                    < ListGroup.Item >
                        <span>Total</span>
                        <span className="float-right">$ {this.props.total}</span>
                    </ListGroup.Item>
                }
            </ListGroup>
        )
    }
}

export default Cart;