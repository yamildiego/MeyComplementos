import React from 'react';
import './styles/OrderCompleted.css';

class OrderCompleted extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>El pedido se ha completado!</h1>
                <div className="OrderCompleted">
                    <h5>Pedido #{this.props.id}</h5>
                    <p>FELICITACIONES!</p>
                    <p>Tu compra a sido exitosa, estamos procesando el envió.</p>
                    <p>El numero de seguimiento sera enviado a {this.props.email}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default OrderCompleted;