import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Cart.css';
import formatNumber from './../utilities/formatNumber';
import * as actions from './actions/article';
import dataArticles from './../api.json';

class Cart extends React.Component {

    handleClickDelete = (item, itemData) => {
        let newItem = {
            id: item.id,
            size: itemData.size,
            color: itemData.color,
            price: item.price,
            qty: 1
        }
        this.props.dispatch(actions.articleActionDelete(newItem));
    }

    getItem = (id) => {
        let item = null;
        dataArticles.articles.forEach(element => { if (element.id === id) item = element; });
        return item;
    }

    render() {
        return (
            <div className="Cart">
                <ListGroup >
                    <h4 className="CartTitle"><FormattedMessage locale={this.props.lang} id="cart.total" />&nbsp;
                        <span>{this.props.totalItems}</span>&nbsp;
                        <FormattedMessage locale={this.props.lang} id="cart.item" />
                        {this.props.totalItems > 1 ? "S" : ""}
                    </h4>
                    {
                        this.props.cartItems.sort((a, b) => { return a.id - b.id }).map((itemData, index) => {
                            let item = this.getItem(itemData.id);
                            return (
                                <ListGroup.Item key={index} className="non-selectable" >
                                    <div className="CartItem">
                                        <FontAwesomeIcon className="CartTag" icon="tag" color="green" />
                                        <span>
                                            {item.title} <span className="font-weight-bold">X{itemData.qty}</span>
                                        </span>
                                        <FontAwesomeIcon onClick={() => this.handleClickDelete(item, itemData)} className="CartRemove" icon="times" color="grey" />
                                        <span className="CartPrice">{formatNumber(item.price)}</span>
                                    </div>
                                    <div className="CartDetail">
                                        {
                                            (item.colors && item.colors.length > 0) &&
                                            <span>Color {item.colors[itemData.color].displayName}</span>
                                        }
                                        {
                                            (item.sizes && item.sizes.length > 0) &&
                                            <span>Talle {item.sizes[itemData.size].displayName}</span>
                                        }
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                    {
                        (this.props.totalItems > 0) &&
                        <ListGroup.Item className="CartTotal">
                            <FontAwesomeIcon className="CartCheck" icon="check-circle" color="#55b96c" />
                            <span><FormattedMessage locale={this.props.lang} id="cart.total" /></span>
                            <span className="float-right CartTotalPrice">{formatNumber(this.props.total)}</span>
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
        props,
        totalItems: state.articleReducer.totalItems,
        total: state.articleReducer.total,
        cartItems: state.articleReducer.cartItems
    }
}

export default connect(mapStateToProps)(Cart);