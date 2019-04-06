import React from 'react';
import './LogoPresentation.css';
import { ProgressBar, Image } from 'react-bootstrap';
import Logo from '../../../../images/logo_presentation.png';

const LogoPresentation = (props) => (
    <div className="LogoPresentation">
        <ProgressBar className="LogoProgressBar" now={props.progress} />
        <Image className="Image" src={Logo} />
    </div>
)

export default LogoPresentation;