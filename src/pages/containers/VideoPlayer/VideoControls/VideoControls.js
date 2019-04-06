import React from 'react';
import './VideoControls.css';

const VideoControls = props => {
    return (
        <div className="VideoControls">
            {props.children}
        </div>
    )
}

export default VideoControls;