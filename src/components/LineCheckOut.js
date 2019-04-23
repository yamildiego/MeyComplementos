import React from 'react';
import './styles/LineCheckOut.css';

class LineCheckOut extends React.Component {
    render() {
        const statusText = ["Carrito", "Envio", "Pago", "Pedido Realizado"];
        return (
            <div className="LineCheckOut">
                <ul>
                    {
                        statusText.map((item, index) => {
                            return (
                                <li key={index} className="LineCheckOutOption">
                                    {
                                        this.props.status == index &&
                                        <div className="LineCheckOutOptionActive"></div>
                                    }
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="LineCheckOutOptionInactive"></div>
            </div>
        )
    }
}

export default LineCheckOut;