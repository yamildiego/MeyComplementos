import React from 'react';
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
                        Continuar&nbsp;&nbsp;
                    <FontAwesomeIcon icon="long-arrow-alt-right" />
                    </button>
                }
                <h4 className="OrderSummaryTitle">Resumen del pedido</h4>
                <div className="OrderSummaryBody">
                    <ul>
                        <li>{this.state.dataCart.totalItems} PRODUCTOS</li>
                        <li>Total en productos<span className="OrderSummaryAmount">{formatNumber(this.state.dataCart.total)}</span></li>
                        <li>Entrega<span className="OrderSummaryAmount">Gratis</span></li>
                        <li>Total<span className="OrderSummaryTotal">{formatNumber(this.state.dataCart.total)}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default OrderSummary;