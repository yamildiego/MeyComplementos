import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ViewCartLine from './ViewCartLine';
import Ad from './../images/ad.png'
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
            <div className="ViewCart">
                <div className="row">
                    <div className="col-lg-10">
                        {
                            this.state.dataCart.totalItems > 0 &&
                            <h1>Tu carrito <span>{this.state.dataCart.totalItems} Items</span></h1>
                        }
                        {
                            this.state.dataCart.totalItems == 0 &&
                            <React.Fragment>
                                <h1>Tu carrito está vacío</h1>
                                <button type="button" className="btn btn-outline-dark btn-lg mt-4 ml-4" onClick={this.props.toggleViewCart}>Sigue comprando</button>
                            </React.Fragment>
                        }
                        <div className="ViewCartList">
                            {
                                this.state.dataCart.cartItems.map((item, index) => {
                                    return (
                                        <ViewCartLine
                                            handleUpdateQuantity={this.props.handleUpdateQuantity}
                                            key={index}
                                            item={this.state.dataCart.cartItems[index]}
                                        />
                                    )
                                })
                            }
                        </div>
                        {
                            this.state.dataCart.totalItems > 0 &&
                            <div className="text-center mt-4">
                                <button
                                    type="button"
                                    onClick={this.props.nextStep}
                                    className="btn btn-outline-success btn-lg">
                                    Continuar&nbsp;&nbsp;
                                <FontAwesomeIcon icon="long-arrow-alt-right" />
                                </button>
                            </div>
                        }
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-2">
                        <Image src={Ad} fluid />
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCart;