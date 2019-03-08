import React from 'react';
// import { Row, Col } from 'react-bootstrap';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// library.add(fab, faCheckSquare, faCoffee)


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LayoutMain extends React.Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon="check-square" />
                Favorite beverage: <FontAwesomeIcon icon="coffee" />
            </div>
        )
    }
}

export default LayoutMain;

