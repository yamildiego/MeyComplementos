import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ChangeLanguage from './ChangeLanguage';

import './styles/AppLayout.css';

function AppLayout(props) {
    return (
        <div className="AppLayout">
            <Menu />
            <ChangeLanguage />
            {props.children}
            <Footer />
        </div>
    )
}

export default AppLayout;