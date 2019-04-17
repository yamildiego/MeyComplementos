import React from 'react';

class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = e => {
    }
    handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost/unallamanew/Server/Home/sendMsg', {
            method: 'POST',
            // headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // },
            data: {

            }
            // body: JSON.stringify({
            //     name: 'yourValue',
            //     email: 'yourOtherValue',
            //     query: 'yourOtherValue',
            // })
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            });
        // fetch('http://localhost/unallamanew/Server/Home/sendMsg')

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName">Nombre</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="name"
                            placeholder="Nombre"
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Correo electrónico</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            name="email"
                            placeholder="Correo electrónico"
                            value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage">Mensaje</label>
                        <textarea
                            onChange={this.handleChange}
                            className="form-control"
                            id="inputMessage"
                            name="message"
                            placeholder="Mensaje"
                            rows="3"
                            value={this.state.message} />
                    </div>
                    <button
                        onClick={this.handleClick}
                        type="submit"
                        className="btn btn-primary">
                        Enviar
                        </button>
                </form>
            </div>
        )
    }
}

export default ContactForm;