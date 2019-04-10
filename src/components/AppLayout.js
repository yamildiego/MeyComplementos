import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import './styles/AppLayout.css';

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