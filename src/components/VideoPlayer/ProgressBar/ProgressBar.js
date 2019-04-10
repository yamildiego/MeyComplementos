import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
    return (
        <div className="ProgressBar">
            <input
                type="range"
                min={0}
                max={props.duration}
                value={props.currentTime}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default ProgressBar;