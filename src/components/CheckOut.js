import React from 'react';
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import ViewCart from './ViewCart';
import LineCheckOut from './LineCheckOut';
import DeliveryData from './DeliveryData';
import OrderSummary from './OrderSummary';
import Loading from './Loading';
import Pay from './Pay';
// import Constants from './../config';
// import queryString from 'querystring';
import isValidEmail from './../utilities/isValidEmail';
import './styles/CheckOut.css';

class CheckOut extends React.Component {
    state = {
        loading: false,
        status: 0,
        showErrors: false,
        errorGenerateMP: false,
        linkMP: null,
        saleId: null,
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
        if (this.state.dataPeronal.name === "" ||
            this.state.dataPeronal.lastname === "" ||
            this.state.dataPeronal.street === "" ||
            this.state.dataPeronal.phone === "" ||
            this.state.dataPeronal.email === "")
            this.setState({ showErrors: true });
        else {
            if (isValidEmail(this.state.dataPeronal.email)) {
                this.setState({ loading: true });
                setTimeout(() => this.setState({ loading: false, status: this.state.status + 1 }), 1000);
                // fetch(Constants.urlServer + '/newSale', {
                //     method: 'POST',
                //     body: JSON.stringify({ dataCart: this.props.dataCart, dataPersonal: this.state.dataPeronal }),
                //     headers: {
                //         'Content-Type': 'application/json; charset=utf-8',
                //         'Accept': 'application/json'
                //     }
                // }).then(response => response.json())
                //     .then(response => {
                //         this.setState({ saleId: response._id })
                //     });

                // fetch(Constants.urlServerPHP + '/generateLinkMP', {
                //     method: 'POST',
                //     body: queryString.stringify({ total: this.props.dataCart.total, totalItems: this.props.dataCart.totalItems }),
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //         'Accept': 'application/json'
                //     }
                // })
                //     .then(response => response.json())
                //     .then(response => {
                //         if (response.status === true)
                //             this.setState({ loading: false, linkMP: response.data, status: this.state.status + 1 })
                //     }).catch((error) => {
                //         this.setState({ loading: false, errorGenerateMP: true, status: this.state.status + 1 })
                //     });
            } else {
                this.setState({
                    showErrors: true,
                    dataPeronal: {
                        ...this.state.dataPeronal,
                        email: ""
                    }
                })
            }

        }
    }

    nextStepComplete = e => {
        // if (this.state.errorGenerateMP === false)
        // window.open(this.state.linkMP, '_blank');
    }

    backStep = e => this.setState({ status: this.state.status - 1 })

    setStep = step => {
        this.setState({
            errorGenerateMP: false,
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
                    <Loading loading={this.state.loading} />
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                this.state.status === 0 &&
                                <ViewCart
                                    toggleViewCart={this.props.toggleViewCart}
                                    handleUpdateQuantity={this.props.handleUpdateQuantity}
                                    openModalUpdate={this.props.openModalUpdate}
                                    nextStep={this.nextStepDeliveryData}
                                />
                            }
                            {
                                this.state.status === 1 &&
                                <DeliveryData
                                    dataPeronal={this.state.dataPeronal}
                                    handleChangeDataPersonal={this.handleChangeDataPersonal}
                                    showErrors={this.state.showErrors}
                                    backStep={this.backStep}
                                    nextStep={this.nextStepPay}
                                />
                            }
                            {
                                this.state.status === 2 &&
                                <Pay linkMP={this.state.linkMP} nextStepComplete={this.nextStepComplete} />
                            }
                            {/* {
                                (this.state.status === 2 && this.state.errorGenerateMP === false) &&
                                <Pay linkMP={this.state.linkMP} nextStepComplete={this.nextStepComplete} />
                            } */}
                            {/* {
                                (this.state.status === 2 && this.state.errorGenerateMP === true) &&
                                <div className="alert alert-danger text-center w-80 mt-3 mx-auto">Ocurrió un error al generar el link de pago, porfavor póngase en contacto con nosotros, enviandonos el siguiente código #{this.state.saleId} <Link to="/contacto">aqui</Link> para generar el link de manera manual. Disculpe las molestias</div>
                            } */}
                        </div>
                        {
                            <div className="col-lg-4">
                                <OrderSummary
                                    nextStepDeliveryData={this.nextStepDeliveryData}
                                    nextStepPay={this.nextStepPay}
                                    nextStepComplete={this.nextStepComplete}
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

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props
    }
}

export default connect(mapStateToProps)(CheckOut);