import React from 'react';
import ViewCart from './ViewCart';
import LineCheckOut from './LineCheckOut';
import DeliveryData from './DeliveryData';
import OrderSummary from './OrderSummary';
import Pay from './Pay';
import OrderCompleted from './OrderCompleted';
import Constants from './../config';
import './styles/CheckOut.css';

class CheckOut extends React.Component {
    state = {
        dataCart: this.props.dataCart,
        status: 0,
        showErrors: false,
        linkMP: null,
        dataPeronal:
        {
            name: '',
            lastname: '',
            street: '',
            numberStreet: '',
            floor: '',
            apartment: '',
            postCode: '',
            phone: '',
            email: ''
        }
    }
    componentWillReceiveProps = nextProps => {
        if (this.props.dataCart != nextProps.dataCart) {
            this.setState({ dataCart: nextProps.dataCart });
        }
    }
    handleChangeDataPersonal = e => {
        this.setState({
            dataPeronal: {
                ...this.state.dataPeronal,
                [e.target.name]: e.target.value
            }
        })
    }
    nextStepDeliveryData = e => {
        this.setState({
            showErrors: false,
            status: this.state.status + 1
        })
    }
    nextStepPay = e => {
        if (e)
            e.preventDefault();
        if (this.state.dataPeronal.name == "" ||
            this.state.dataPeronal.lastname == "" ||
            this.state.dataPeronal.street == "" ||
            this.state.dataPeronal.numberStreet == "" ||
            this.state.dataPeronal.postCode == "" ||
            this.state.dataPeronal.phone == "" ||
            this.state.dataPeronal.email == "")
            this.setState({ showErrors: true });
        else {
            fetch(Constants.urlServerPHP + '/generateLinkMP')
                .then(response => response.json())
                .then(response => {
                    if (response.status)
                        this.setState({ linkMP: response.data, status: this.state.status + 1 })
                });
        }
    }
    nextStepComplete = e => {
        //TODO 
        this.setState({
            showErrors: false,
            status: this.state.status + 1,
        });
        this.props.cleanCart();
    }
    backStep = e => {
        this.setState({ status: this.state.status - 1 })
    }
    setStep = step => {
        this.setState({
            showErrors: false,
            status: step
        })
    }
    render() {
        return (
            <div className="container-fuild CheckOut">
                <LineCheckOut
                    toggleViewCart={this.props.toggleViewCart}
                    status={this.state.status}
                    setStep={this.setStep}
                />
                <div className="CheckOutContainer">
                    <div className="row">
                        <div className={(this.state.status != 3) ? "col-lg-8" : "col-lg-12"}>
                            {
                                this.state.status == 0 &&
                                <ViewCart
                                    toggleViewCart={this.props.toggleViewCart}
                                    handleUpdateQuantity={this.props.handleUpdateQuantity}
                                    dataCart={this.state.dataCart}
                                    toggleViewCart={this.props.toggleViewCart}
                                    nextStep={this.nextStepDeliveryData}
                                />
                            }
                            {
                                this.state.status == 1 &&
                                <DeliveryData
                                    dataPeronal={this.state.dataPeronal}
                                    handleChangeDataPersonal={this.handleChangeDataPersonal}
                                    showErrors={this.state.showErrors}
                                    backStep={this.backStep}
                                    nextStep={this.nextStepPay}
                                />
                            }
                            {
                                this.state.status == 2 &&
                                <Pay linkMP={this.state.linkMP} nextStepComplete={this.nextStepComplete} />
                            }
                            {
                                this.state.status == 3 &&
                                <OrderCompleted
                                    id={"74538DE"}
                                    email={this.state.dataPeronal.email}
                                />
                            }

                        </div>
                        {
                            this.state.status != 3 &&
                            <div className="col-lg-4">
                                <OrderSummary
                                    nextStepDeliveryData={this.nextStepDeliveryData}
                                    nextStepPay={this.nextStepPay}
                                    nextStepComplete={this.nextStepComplete}
                                    dataCart={this.state.dataCart}
                                    status={this.state.status}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default CheckOut