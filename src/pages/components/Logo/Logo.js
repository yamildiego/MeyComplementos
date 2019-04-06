import React from 'react';
import Image from 'react-bootstrap/Image'
import './Logo.css'
import ImageLogo from '../../../../images/logo.png';

function Logo() {
    return (
        <Image className="Logo" src={ImageLogo} fluid />
    )
}

export default Logo;