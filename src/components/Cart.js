import React from 'react';
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Cart.css';
import formatNumber from './../utilities/formatNumber';

class Cart extends React.Component {
    handleClick = (item) => {
        this.props.handleRemoveItem(item);
    }
    render() {
        return (
            <div className="Cart">
                <ListGroup >
                    <h4 className="CartTitle">TOTAL <span>{this.props.dataCart.totalItems}</span> ITEM{this.props.dataCart.totalItems > 1 ? "S" : ""}</h4>
                    {
                        this.props.dataCart.cartItems.map((item, index) => {
                            return (
                                <ListGroup.Item key={index} className="non-selectable" >
                                    <div className="CartItem">
                                        <FontAwesomeIcon className="CartTag" icon="tag" color="green" />
                                        <span>
                                            {item.title} <span className="font-weight-bold">X{item.quantity}</span>
                                        </span>
                                        <FontAwesomeIcon onClick={() => this.handleClick(item)} className="CartRemove" icon="times" color="grey" />
                                        <span className="CartPrice">{formatNumber(item.price)}</span>
                                    </div>
                                    <div className="CartDetail">
                                        {
                                            item.colors &&
                                            <span>Color {item.colors[item.color].displayName}</span>
                                        }
                                        {
                                            item.sizes &&
                                            <span>Talle {item.sizes[item.size].displayName}</span>
                                        }
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                    {
                        (this.props.dataCart.cartItems != undefined && this.props.dataCart.cartItems.length > 0) &&
                        <ListGroup.Item className="CartTotal">
                            <FontAwesomeIcon className="CartCheck" icon="check-circle" color="#55b96c" />
                            <span>Total</span>
                            <span className="float-right CartTotalPrice">{formatNumber(this.props.dataCart.total)}</span>
                        </ListGroup.Item>
                    }
                </ListGroup>

                <button type="button" className="btn btn-info ViewArticleSeeCart" onClick={this.props.toggleViewCart}>Ver carrito</button>
            </div>
        )
    }
}

export default Cart;