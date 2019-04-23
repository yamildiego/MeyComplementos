import React from 'react';
import './styles/LineCheckOut.css';

class LineCheckOut extends React.Component {
    render() {
        const statusText = ["Carrito", "Envio", "Pago", "Pedido Realizado"];
        return (
            <div className="LineCheckOut">
                <div className="LineCheckOutContainer">
                    <a className="LineCheckOutContainerLink" onClick={this.props.toggleViewCart}>Sigue comprando</a>
                    <ul>
                        {
                            statusText.map((item, index) => {
                                return (
                                    <li key={index} className="LineCheckOutOption">
                                        {
                                            this.props.status == index &&
                                            <div className="LineCheckOutOptionActive"></div>
                                        }
                                        <div className="non-selectable" onClick={() => { this.props.setStep(index) }}>
                                            {item}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="LineCheckOutOptionInactive"></div>
            </div>
        )
    }
}

export default LineCheckOut;