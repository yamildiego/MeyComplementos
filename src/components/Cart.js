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
            <div className="Cart">
                <ListGroup >
                    <h4 className="CartTitle">TOTAL <span>{this.props.totalItems}</span> ITEM{this.props.totalItems > 1 ? "S" : ""}</h4>
                    {
                        this.props.cartItems.map((item) => {
                            return (
                                <ListGroup.Item key={item.id} >
                                    <div class="CartItem">
                                        <FontAwesomeIcon className="CartTag" icon="tag" color="green" />
                                        <span>
                                            {item.title} <span className="font-weight-bold">X{item.quantity}</span>
                                        </span>
                                        <FontAwesomeIcon onClick={() => this.handleClick(item)} className="CartRemove" icon="times" color="grey" />
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
            </div>
        )
    }
}

export default Cart;