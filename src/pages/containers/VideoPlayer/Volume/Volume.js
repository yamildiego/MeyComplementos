import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Volume.css';

const Volume = props => {
    return (
        <div className="Volume">
            <div onClick={props.handleResetVolume}>
                {
                    props.mute ?
                        <FontAwesomeIcon icon="volume-mute" color={props.color} />
                        :
                        <FontAwesomeIcon icon="volume-up" color={props.color} />
                }
            </div>
            <div className="Volume-range">
                <input
                    step={.05}
                    type="range"
                    min={0}
                    max={1}
                    value={props.value}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </div>
    )
}

export default Volume;