import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/DeliveryData.css';

class DeliveryData extends React.Component {
    render() {
        return (
            <div className="DeliveryData">
                <form className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Nombre(s)</label>
                        <input type="text" className="form-control" id="name" placeholder="Ingrese su Nombre(s)" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="lastname">Apellido(s)</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Ingrese su Apellido(s)" />
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="street">Calle</label>
                        <input type="text" className="form-control" id="street" placeholder="Calle" />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="numberStreet">Numero</label>
                        <input type="text" className="form-control" id="numberStreet" placeholder="Numero" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="floor">Piso</label>
                        <input type="text" className="form-control" id="floor" placeholder="Piso" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="apartment">Departamento</label>
                        <input type="text" className="form-control" id="apartment" placeholder="Departamento" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="postCode">Codigo postal</label>
                        <input type="text" className="form-control" id="postCode" placeholder="Codigo postal" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="country">Pais</label>
                        <input type="text" className="form-control" id="country" disabled value="Argentina" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="phone">Telefono</label>
                        <input type="text" className="form-control" id="phone" placeholder="Telefono" />
                        <small id="phoneHelp" className="form-text text-muted">Por si acaso tenemos preguntas sobre tu pedido.</small>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="form-group form-check">
                        <label className="checkBoxCustom">
                            Dirección de facturación es igual a dirección de entrega.
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <button
                        type="button"
                        onClick={this.props.backStep}
                        className="btn btn-outline-success btn-lg mr-5">
                        <FontAwesomeIcon icon="long-arrow-alt-left" />
                        Volver&nbsp;&nbsp;
                    </button>
                    <button
                        type="button"
                        onClick={this.props.nextStep}
                        className="btn btn-outline-success btn-lg">
                        Continuar&nbsp;&nbsp;
                        <FontAwesomeIcon icon="long-arrow-alt-right" />
                    </button>
                </div>

            </div>
        )
    }
}

export default DeliveryData;