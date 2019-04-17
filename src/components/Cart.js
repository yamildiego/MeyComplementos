import React from 'react';
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Cart.css';
import formatNumber from './../utilities/formatNumber';

class Cart extends React.Component {
    render() {
        return (
            <div className="Cart">
                <ListGroup >
                    <h4 className="CartTitle">TOTAL <span>{this.props.totalItems}</span> ITEM{this.props.totalItems > 1 ? "S" : ""}</h4>
                    {
                        this.props.cartItems.map((item, index) => {
                            return (
                                <ListGroup.Item key={index} >
                                    <div className="CartItem">
                                        <FontAwesomeIcon className="CartTag" icon="tag" color="green" />
                                        <span>
                                            {item.title} <span className="font-weight-bold">X{item.quantity}</span>
                                        </span>
                                        <span className="float-right CartPrice">{formatNumber(item.price)}</span>
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                    {
                        (this.props.cartItems != undefined && this.props.cartItems.length > 0) &&
                        <ListGroup.Item className="CartTotal">
                            <FontAwesomeIcon className="CartCheck" icon="check-circle" color="#55b96c" />
                            <span>Total</span>
                            <span className="float-right CartTotalPrice">{formatNumber(this.props.total)}</span>
                        </ListGroup.Item>
                    }
                </ListGroup>

                <button type="button" className="btn btn-info ViewArticleSeeCart" onClick={this.props.toggleViewCart}>Ver carrito</button>
            </div>
        )
    }
}

export default Cart;