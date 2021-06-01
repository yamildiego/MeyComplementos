import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ViewCartLine from './ViewCartLine';
import './styles/ViewCart.css';

class ViewCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.dataCart.totalItems > 0 &&
                    <h1><FormattedMessage locale={this.props.lang} id="view_cart.title" /><span>{this.props.dataCart.totalItems} Items</span></h1>
                }
                {
                    this.props.dataCart.totalItems === 0 &&
                    <React.Fragment>
                        <h1><FormattedMessage locale={this.props.lang} id="view_cart.empty" /></h1>
                        <button type="button" className="btn btn-outline-dark btn-lg mt-4 ml-4" onClick={this.props.toggleViewCart}>
                            <FormattedMessage locale={this.props.lang} id="view_cart.continue_shopping" />
                        </button>
                    </React.Fragment>
                }
                {
                    this.props.dataCart.cartItems.map((item, index) => {
                        return (
                            <ViewCartLine
                                handleUpdateQuantity={this.props.handleUpdateQuantity}
                                openModalUpdate={this.props.openModalUpdate}
                                key={index}
                                item={item}
                            />
                        )
                    })
                }
                {
                    this.props.dataCart.totalItems > 0 &&
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
        props
    }
}

export default connect(mapStateToProps)(ViewCart);