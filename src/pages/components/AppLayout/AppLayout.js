import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './AppLayout.css';

function AppLayout(props) {
    return (
        <div className="AppLayout">
            <Menu></Menu>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default AppLayout;