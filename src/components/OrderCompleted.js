import React from 'react';
import './styles/OrderCompleted.css';

class OrderCompleted extends React.Component {
    render() {
        return (
            <div className="OrderCompleted">
                {
                    this.props.collectionStatus == "approved" &&
                    <React.Fragment>
                        <h1>El pedido se ha completado!</h1>
                        <div className="OrderCompletedBody">
                            <h5>Tu numero de comprobante es #{this.props.collectionId}</h5>
                            <p>FELICITACIONES!</p>
                            <p>Tu compra a sido exitosa, estamos procesando el envió.</p>
                            <p>El numero de seguimiento sera enviado a tu correo electrónico.</p>
                        </div>
                    </React.Fragment>
                }
                {
                    this.props.collectionStatus == "in_process" &&
                    <React.Fragment>
                        <h1>El pedido se ha completado!</h1>
                        <h2 className={this.props.collectionStatus}>El pago se esta procesando.</h2>
                        <div className="OrderCompletedBody">
                            <h5>Tu numero de comprobante es #{this.props.collectionId}</h5>
                            <p>MercadoPago esta procesando tu pago.</p>
                            <p>Procesaremos su envió apenas tengamos la confirmación correspondiente.</p>
                            <p>El numero de seguimiento sera enviado a tu correo electrónico.</p>
                        </div>
                    </React.Fragment>
                }
                {
                    this.props.collectionStatus == "pending" &&
                    <React.Fragment>
                        <h1>El pedido se ha completado!</h1>
                        <h2 className={this.props.collectionStatus}>El pago se encuentra pendiente.</h2>
                        <div className="OrderCompletedBody">
                            <h5>Tu numero de comprobante es #{this.props.collectionId}</h5>
                            <p>Aun no recibimos el pago, MercadoPago nos informara cuando esto ocurra.</p>
                            <p>Procesaremos su envió apenas tengamos la confirmación correspondiente.</p>
                            <p>El numero de seguimiento sera enviado a tu correo electrónico.</p>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default OrderCompleted;