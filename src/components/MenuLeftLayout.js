import React from 'react';
import './styles/MenuLeftLayout.css';

function MenuLeftLayout(props) {
    return (
        <div className="MenuLeftLayout">
            <p className="lead">Categorías</p>
            {props.children}
        </div>
    )
}

export default MenuLeftLayout;