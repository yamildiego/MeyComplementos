import React from 'react';

class Pay extends React.Component {
    aaa = () => {
    }
    render() {
        return (
            <div>
                {
                    this.props.linkMP == null &&
                    <div>
                        Lo sentimos no pudimos generar el link de pago, Contactese con nosotros haciendo click aqui y nos pondremos en contacto lo antes posible.
                    </div>
                }
                {
                    this.props.linkMP != null &&
                    <div>
                        <a href={this.props.linkMP}>pagarrr</a>
                    </div>
                }

            </div>
            // <div onClick={this.props.nextStepComplete}>CONTINUAR</div>
            // <div onClick={this.aaa}>CONTINUAR</div>
        )
    }
}

export default Pay;