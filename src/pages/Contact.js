import React from 'react';
import ContactForm from './../components/ContactForm';

const Contact = () => (
    <div>
        <ContactForm />
    </div>

)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)


export default Contact;