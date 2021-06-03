import React from 'react';
// import Image from 'react-bootstrap/Image';
// import LogoMP from './../images/pays/logo_mp.png';

class Pay extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    The website is in test mode
                </div>
                {/* {
                    this.props.linkMP == null &&
                    <div>
                        Lo sentimos no pudimos generar el link de pago, Contactese con nosotros haciendo click aqui y nos pondremos en contacto lo antes posible.
                    </div>
                } */}
                {/* {
                    this.props.linkMP != null &&
                    <div>
                        <div className="text-center p-5">
                            <Image src={LogoMP}></Image>
                        </div>
                        <div className="text-center">
                            <a target="_blank" rel="noopener noreferrer" className="btn btn-info w-50" href={this.props.linkMP}>Pagar</a>
                        </div>
                    </div>
                } */}
            </div>
        )
    }
}

export default Pay;