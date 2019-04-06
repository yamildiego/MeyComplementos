import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className="Title">
            <h2>{props.title}</h2>
        </div>
    )
}

export default Title;