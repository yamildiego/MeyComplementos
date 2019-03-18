import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './MenuLeftLayout.css';

function MenuLeftLayout(props) {
    return (
        <div className="MenuLeftLayout">
            <p className="lead">Categorías</p>
            {props.categories}
            {props.cart}
            <ListGroup>
                <ListGroup.Item className="MenuLeftLayout-Ad">
                    <div className="text-center">
                        ¿No tenemos lo que estas buscando?
                    </div>
                    <div className="text-center">
                        Hace tu pedido haciendo clic <Link to="/contacto">aquí!/</Link>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default MenuLeftLayout;