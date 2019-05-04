import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Banner from './../../images/pays/tarjetas.png';
import './PaymentMethods.css';
import Data from './paymentMethods.json';

const PaymentMethods = props => (
    <div className="container PaymentMethods">
        <h1>Beneficios</h1>
        <div className="BannerMP">
            <Image src={Banner} />
        </div>
        <h2>Promociones pagando a través de MercadoPago:</h2>
        <Row>
            {
                Data.plans.map((item) => {
                    return (
                        <Col md={4} key={item.id}>
                            <div className="PaymentMethodsBox">
                                <div className="my-img">
                                    <Image src={item.image} />
                                </div>
                                <div className="PaymentMethodsName">{item.name}</div>
                                <p className="PaymentMethodsLabel">Hasta el 31/may/2019</p>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    </div>
)
export default PaymentMethods;