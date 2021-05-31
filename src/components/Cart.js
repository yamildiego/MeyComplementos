import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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
                    <h4 className="CartTitle"><FormattedMessage locale={this.props.lang} id="cart.total" />&nbsp;
                        <span>{this.props.dataCart.totalItems}</span>&nbsp;
                        <FormattedMessage locale={this.props.lang} id="cart.item" />
                        {this.props.dataCart.totalItems > 1 ? "S" : ""}
                    </h4>
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
                                            (item.colors && item.colors.length > 0) &&
                                            <span>Color {item.colors[item.color].displayName}</span>
                                        }
                                        {
                                            (item.sizes && item.sizes.length > 0) &&
                                            <span>Talle {item.sizes[item.size].displayName}</span>
                                        }
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                    {
                        (this.props.dataCart.cartItems !== undefined && this.props.dataCart.cartItems.length > 0) &&
                        <ListGroup.Item className="CartTotal">
                            <FontAwesomeIcon className="CartCheck" icon="check-circle" color="#55b96c" />
                            <span><FormattedMessage locale={this.props.lang} id="cart.total" /></span>
                            <span className="float-right CartTotalPrice">{formatNumber(this.props.dataCart.total)}</span>
                        </ListGroup.Item>
                    }
                </ListGroup>

                <button type="button" className="btn btn-info ViewArticleSeeCart" onClick={this.props.toggleViewCart}>
                    <FormattedMessage locale={this.props.lang} id="cart.view_bag" />
                </button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props
    }
}

export default connect(mapStateToProps)(Cart);