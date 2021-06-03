import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ViewCartLine from './ViewCartLine';
import dataArticles from './../api.json';
import './styles/ViewCart.css';

class ViewCart extends React.Component {

    getItem = (id) => {
        let item = null;
        dataArticles.articles.forEach(element => { if (element.id === id) item = element; });
        return item;
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.totalItems > 0 &&
                    <h1><FormattedMessage locale={this.props.lang} id="view_cart.title" /><span>{this.props.totalItems} Items</span></h1>
                }
                {
                    this.props.totalItems === 0 &&
                    <React.Fragment>
                        <h1><FormattedMessage locale={this.props.lang} id="view_cart.empty" /></h1>
                        <button type="button" className="btn btn-outline-dark btn-lg mt-4 ml-4" onClick={this.props.toggleViewCart}>
                            <FormattedMessage locale={this.props.lang} id="view_cart.continue_shopping" />
                        </button>
                    </React.Fragment>
                }
                {
                    this.props.cartItems.sort((a, b) => { return a.id - b.id }).map((itemData, index) => {
                        let item = this.getItem(itemData.id);
                        return (
                            <ViewCartLine
                                openModalUpdate={this.props.openModalUpdate}
                                key={index}
                                item={item}
                                itemData={itemData}
                            />
                        )
                    })
                }
                {
                    this.props.totalItems > 0 &&
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            onClick={this.props.toggleViewCart}
                            className="btn btn-outline-dark btn-lg mr-5 mt-2 w-xs-100">
                            <FormattedMessage locale={this.props.lang} id="view_cart.continue_shopping" />&nbsp;&nbsp;
                                </button>
                        <button
                            type="button"
                            onClick={this.props.nextStep}
                            className="btn btn-outline-success btn-lg mt-2 w-xs-100">
                            <FormattedMessage locale={this.props.lang} id="view_cart.next" />&nbsp;&nbsp;
                                <FontAwesomeIcon icon="long-arrow-alt-right" />
                        </button>
                    </div>
                }
            </React.Fragment>
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

export default connect(mapStateToProps)(ViewCart);