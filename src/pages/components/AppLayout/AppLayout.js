import React from 'react';
import './AppLayout.css';

function AppLayout(props) {
    return (
        <div className="AppLayout">
            {props.children}
        </div>
    )
}

export default AppLayout;