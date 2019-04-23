import React from 'react';
import { Image } from 'react-bootstrap';
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
        let key = 0;
        return (
            <div className="ViewCart">
                <h1>Tu carrito <span>{this.state.dataCart.totalItems} Items</span></h1>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="ViewCartList">
                            {
                                this.state.dataCart.cartItems.map((item) => {
                                    key++;
                                    return (
                                        <ViewCartLine
                                            handleUpdateQuantity={this.props.handleUpdateQuantity}
                                            key={key}
                                            item={item}
                                        />
                                    )
                                })
                            }
                        </div>
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