import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ViewCartLine from './ViewCartLine';
import './styles/ViewCart.css';

class ViewCart extends React.Component {
    state = { dataCart: this.props.dataCart }
    componentWillReceiveProps = nextProps => {
        if (this.props.dataCart !== nextProps.dataCart) {
            this.setState({ dataCart: nextProps.dataCart });
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.dataCart.totalItems > 0 &&
                    <h1><FormattedMessage locale={this.props.lang} id="view_cart.title" /><span>{this.state.dataCart.totalItems} Items</span></h1>
                }
                {
                    this.state.dataCart.totalItems === 0 &&
                    <React.Fragment>
                        <h1><FormattedMessage locale={this.props.lang} id="view_cart.empty" /></h1>
                        <button type="button" className="btn btn-outline-dark btn-lg mt-4 ml-4" onClick={this.props.toggleViewCart}>
                            <FormattedMessage locale={this.props.lang} id="view_cart.continue_shopping" />
                        </button>
                    </React.Fragment>
                }
                {
                    this.state.dataCart.cartItems.map((item, index) => {
                        return (
                            <ViewCartLine
                                handleUpdateQuantity={this.props.handleUpdateQuantity}
                                openModalUpdate={this.props.openModalUpdate}
                                key={index}
                                item={this.state.dataCart.cartItems[index]}
                            />
                        )
                    })
                }
                {
                    this.state.dataCart.totalItems > 0 &&
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