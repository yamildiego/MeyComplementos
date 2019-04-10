import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FullScreen.css';

const FullScreen = props => (
    <div className="FullScreen"
        onClick={props.handleFullScreenClick}>
        <FontAwesomeIcon icon="compress" color={props.color} />
    </div>
)

export default FullScreen;