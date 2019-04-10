import React from 'react';

const Contact = () => (
    <div>CONTACTO</div>
)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)


export default Contact;