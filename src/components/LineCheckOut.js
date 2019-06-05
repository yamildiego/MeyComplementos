import React from 'react';
import './styles/LineCheckOut.css';

class LineCheckOut extends React.Component {
    handleClick = (index) => {
        if (index <= this.props.status)
            this.props.setStep(index);
    }
    render() {
        const statusText = ["Carrito", "Envío", "Pago", "Pedido Realizado"];
        return (
            <div className="LineCheckOut">
                <div className="LineCheckOutContainer">
                    <div className="LineCheckOutContainerLink d-none d-sm-block" onClick={this.props.toggleViewCart}>Seguir comprando</div>
                    <ul>
                        {
                            statusText.map((item, index) => {
                                return (
                                    <li key={index} className={(index <= this.props.status) ? "LineCheckOutOption" : "LineCheckOutOption LineCheckOutOptionDisabled"}  >
                                        {
                                            index <= this.props.status &&
                                            <div className="LineCheckOutOptionActive"></div>
                                        }
                                        <div
                                            className="non-selectable"
                                            onClick={() => this.handleClick(index)}>
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