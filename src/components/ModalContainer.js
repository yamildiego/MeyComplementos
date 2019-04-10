import React from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends React.Component {
    render() {
        return createPortal(this.props.children, document.getElementById("modal-container"));
    }
}

export default ModalContainer;