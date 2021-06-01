import React from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props,
        totalItems: state.articleReducer.totalItems
    }
}

export default connect(mapStateToProps)(CartDirectAccess);