import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DeliveryData extends React.Component {
    state = {
        showErrors: this.props.showErrors,
        form: {
            ...this.props.dataPeronal
        }
    }
    handleChange = e => this.props.handleChangeDataPersonal(e);
    handleClickNext = e => this.props.nextStep(e);
    componentWillReceiveProps = nextProps => {
        if (this.state.form != nextProps.dataPeronal)
            this.setState({
                form: {
                    ...nextProps.dataPeronal
                }
            })
        if (this.state.showErrors != nextProps.showErrors)
            this.setState({ showErrors: nextProps.showErrors })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Datos personales</h1>
                <div className="DeliveryData">
                    <form className="row" onSubmit={this.handleClickNext}>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name"><span className="required">(*)</span>Nombre(s)</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.name == "") ? "form-control formInputError" : "form-control"}
                                id="name"
                                name="name"
                                placeholder="Ingrese su Nombre(s)"
                                value={this.state.form.name}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastname"><span className="required">(*)</span>Apellido(s)</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.lastname == "") ? "form-control formInputError" : "form-control"}
                                id="lastname"
                                name="lastname"
                                placeholder="Ingrese su Apellido(s)"
                                value={this.state.form.lastname}
                            />
                        </div>
                        <div className="form-group col-8">
                            <label htmlFor="street"><span className="required">(*)</span>Calle</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.street == "") ? "form-control formInputError" : "form-control"}
                                id="street"
                                name="street"
                                placeholder="Calle"
                                value={this.state.form.street}
                            />
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="numberStreet"><span className="required">(*)</span>Número</label>
                            <input
                                onChange={this.handleChange}
                                type="number"
                                className={(this.state.showErrors && this.state.form.numberStreet == "") ? "form-control formInputError" : "form-control"}
                                id="numberStreet"
                                name="numberStreet"
                                placeholder="Número"
                                value={this.state.form.numberStreet}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="floor">Piso</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className="form-control"
                                id="floor"
                                name="floor"
                                placeholder="Piso"
                                value={this.state.form.floor}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="apartment">Departamento</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className="form-control"
                                id="apartment"
                                name="apartment"
                                placeholder="Departamento"
                                value={this.state.form.apartment}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="postCode"><span className="required">(*)</span>Código postal</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.postCode == "") ? "form-control formInputError" : "form-control"}
                                id="postCode"
                                name="postCode"
                                placeholder="Código postal"
                                value={this.state.form.postCode}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="country">País</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                value="Argentina"
                                disabled
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="phone"><span className="required">(*)</span>Teléfono</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.phone == "") ? "form-control formInputError" : "form-control"}
                                id="phone"
                                name="phone"
                                placeholder="Teléfono"
                                value={this.state.form.phone}
                            />
                            <small id="phoneHelp"
                                className="form-text text-muted">Por si acaso tenemos preguntas sobre tu pedido.</small>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="email"><span className="required">(*)</span>Correo electrónico</label>
                            <input
                                onChange={this.handleChange}
                                type="email"
                                className={(this.state.showErrors && this.state.form.email == "") ? "form-control formInputError" : "form-control"}
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={this.state.form.email}
                            />
                        </div>
                        <div className="col-12 text-center mt-4">
                            <button
                                type="button"
                                onClick={this.props.backStep}
                                className="btn btn-outline-dark btn-lg mr-5">
                                Volver&nbsp;&nbsp;
                                </button>
                            <button
                                className="btn btn-outline-success btn-lg">
                                Continuar&nbsp;&nbsp;
                                <FontAwesomeIcon icon="long-arrow-alt-right" />
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default DeliveryData;