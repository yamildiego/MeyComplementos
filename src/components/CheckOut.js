import React from 'react';
import ViewCart from './ViewCart';
import LineCheckOut from './LineCheckOut';

class CheckOut extends React.Component {
    state = {
        dataCart: this.props.dataCart,
        status: 0
    }
    componentWillReceiveProps = nextProps => {
        if (this.props.dataCart != nextProps.dataCart) {
            this.setState({ dataCart: nextProps.dataCart });
        }
    }
    render() {
        return (
            <div className="container-fuild">
                <LineCheckOut status={this.state.status} />
                <ViewCart
                    handleUpdateQuantity={this.props.handleUpdateQuantity}
                    dataCart={this.state.dataCart}
                    toggleViewCart={this.props.toggleViewCart}
                />

                {/* Caracas */}
                {/* <div onClick={this.props.toggleViewCart}>CAMBIARE</div> */}
            </div>
        )
    }
}
export default CheckOut