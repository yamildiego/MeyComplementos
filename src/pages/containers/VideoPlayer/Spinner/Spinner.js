import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Spinner.css';

const Spinner = props => {
    if (!props.active) return null;
    return (
        <div className="Spinner">
            <FontAwesomeIcon icon="spinner" className="fa-pulse" />
        </div>
    )
}

export default Spinner;