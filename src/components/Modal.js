import React from 'react';
import './styles/Modal.css';

function Modal(props) {
    return (
        <div className="Modal">
            {props.children}
            <button
                onClick={props.closeModal}
                className="Modal-close" />
        </div>
    )

}

export default Modal;