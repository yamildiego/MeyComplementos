import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlayPause.css';

const PlayPause = props => {
    return (
        <div className="PlayPause">
            {props.pause ?
                <button onClick={props.handleClick}>
                    <FontAwesomeIcon icon="play" />
                </button>
                :
                <button onClick={props.handleClick}>
                    <FontAwesomeIcon icon="pause" />
                </button>
            }
        </div>
    )
}

export default PlayPause;