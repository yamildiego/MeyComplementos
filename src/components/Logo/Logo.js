import React from 'react';
import './Logo.css'
import Image from 'react-bootstrap/Image'

class Logo extends React.Component {
    render() {
        return (
            <Image className="Logo" src="images/logo.png" fluid />
        )
    }
}

export default Logo;