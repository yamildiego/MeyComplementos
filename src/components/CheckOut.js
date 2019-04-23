import React from 'react';
import ViewCart from './ViewCart';
import LineCheckOut from './LineCheckOut';
import './styles/CheckOut.css';

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
    nextStep = e => {
        this.setState({ status: this.state.status + 1 })
    }
    setStep = step => {
        this.setState({ status: step })
    }
    render() {
        return (
            <div className="container-fuild CheckOut">
                <LineCheckOut
                    toggleViewCart={this.props.toggleViewCart}
                    status={this.state.status}
                    setStep={this.setStep}
                />
                {
                    this.state.status == 0 &&
                    <ViewCart
                        toggleViewCart={this.props.toggleViewCart}
                        handleUpdateQuantity={this.props.handleUpdateQuantity}
                        dataCart={this.state.dataCart}
                        toggleViewCart={this.props.toggleViewCart}
                        nextStep={this.nextStep}
                    />
                }
            </div>
        )
    }
}
export default CheckOut