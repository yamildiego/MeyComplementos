import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formatNumber from './../utilities/formatNumber';
import './styles/OrderSummary.css';

class OrderSummary extends React.Component {
    state = {
        dataCart: this.props.dataCart,
        status: this.props.status
    }
    componentWillReceiveProps = nextProps => {
        if (this.props !== nextProps)
            this.setState({ dataCart: nextProps.dataCart, status: nextProps.status });
    }
    handleClickNext = () => {
        if (this.state.status === 0) {
            this.props.nextStepDeliveryData();
        } else {
            if (this.state.status === 1) {
                this.props.nextStepPay();
            } else {
                if (this.state.status === 2) {
                    this.props.nextStepComplete();
                }
            }
        }
    }
    render() {
        return (
            <div className="OrderSummary">
                {
                    this.state.status <= 2 &&
                    <button
                        type="button"
                        onClick={this.handleClickNext}
                        disabled={(this.state.dataCart.totalItems === 0)}
                        className="btn btn-success btn-lg w-100 d-none d-sm-block">
                        <FormattedMessage locale={this.props.lang} id="order_summary.next" />&nbsp;&nbsp;
                    <FontAwesomeIcon icon="long-arrow-alt-right" />
                    </button>
                }
                <h4 className="OrderSummaryTitle"><FormattedMessage locale={this.props.lang} id="order_summary.title" /></h4>
                <div className="OrderSummaryBody">
                    <ul>
                        <li>{this.state.dataCart.totalItems} <FormattedMessage locale={this.props.lang} id="order_summary.products" /></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.total_products" /><span className="OrderSummaryAmount">{formatNumber(this.state.dataCart.total)}</span></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.shipping" /><span className="OrderSummaryAmount"><FormattedMessage locale={this.props.lang} id="order_summary.free" /></span></li>
                        <li><FormattedMessage locale={this.props.lang} id="order_summary.total" /><span className="OrderSummaryTotal">{formatNumber(this.state.dataCart.total)}</span></li>
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
        props
    }
}

export default connect(mapStateToProps)(OrderSummary);