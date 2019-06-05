import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/CartDirectAccess.css';

const CartDirectAccess = (props) => {
    return (
        <React.Fragment>
            {
                (props.totalItems > 0 && props.showCart === false) &&
                <div className="CartDirectAccess d-none d-lg-block" onClick={props.toggleViewCart}>
                    <FontAwesomeIcon className="CartDirectAccessBag" icon="shopping-bag" />
                    <div className="CartDirectAccessTotal">{props.totalItems}</div>
                </div>
            }
        </React.Fragment>
    )
}

export default CartDirectAccess;