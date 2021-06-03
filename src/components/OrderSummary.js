import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formatNumber from './../utilities/formatNumber';
import './styles/OrderSummary.css';

class OrderSummary extends React.Component {

    handleClickNext = () => {
        console.error(this.props.status);
        if (this.props.status === 0) {
            this.props.nextStepDeliveryData();
        } else {
            if (this.props.status === 1) {
                this.props.nextStepPay();
            } else {
                if (this.props.status === 2) {
                    this.props.nextStepComplete();
                }
            }
        }
    }
    render() {
        return (
            <div className="OrderSummary">
                {
                    this.props.status <= 2 &&
                    <button
                        type="button"
                        onClick={this.handleClickNext}
                        disabled={(this.props.totalItems === 0)}
                        className="btn btn-success btn-lg w-100 d-none d-sm-block">
                        <FormattedMessage locale={this.props.lang} id="order_summary.next" />&nbsp;&nbsp;
                    <FontAwesomeIcon icon="long-arrow-alt-right" />
                    </button>
                }
                <h4 className="OrderSummaryTitle"><FormattedMessage locale={this.props.lang} id="order_summary.title" /></h4>
                <div className="OrderSummaryBody">
                    <ul>
                        <li>{this.props.totalItems} <FormattedMessage locale={this.props.lang} id="order_summary.products" /></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.total_products" /><span className="OrderSummaryAmount">{formatNumber(this.props.total)}</span></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.shipping" /><span className="OrderSummaryAmount"><FormattedMessage locale={this.props.lang} id="order_summary.free" /></span></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.total" /><span className="OrderSummaryTotal">{formatNumber(this.props.total)}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props,
        // status: props.status,
        totalItems: state.articleReducer.totalItems,
        total: state.articleReducer.total,
        cartItems: state.articleReducer.cartItems
    }
}

export default connect(mapStateToProps)(OrderSummary);