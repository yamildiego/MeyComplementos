import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ViewCartLine from './ViewCartLine';
import './styles/ViewCart.css';

class ViewCart extends React.Component {
    state = { dataCart: this.props.dataCart }
    componentWillReceiveProps = nextProps => {
        if (this.props.dataCart != nextProps.dataCart) {
            this.setState({ dataCart: nextProps.dataCart });
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.dataCart.totalItems > 0 &&
                    <h1>Tu carrito tiene <span>{this.state.dataCart.totalItems} Items</span></h1>
                }
                {
                    this.state.dataCart.totalItems == 0 &&
                    <React.Fragment>
                        <h1>Tu carrito está vacío</h1>
                        <button type="button" className="btn btn-outline-dark btn-lg mt-4 ml-4" onClick={this.props.toggleViewCart}>Seguir comprando</button>
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
                            Seguir comprando&nbsp;&nbsp;
                                </button>
                        <button
                            type="button"
                            onClick={this.props.nextStep}
                            className="btn btn-outline-success btn-lg mt-2 w-xs-100">
                            Continuar&nbsp;&nbsp;
                                <FontAwesomeIcon icon="long-arrow-alt-right" />
                        </button>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ViewCart;