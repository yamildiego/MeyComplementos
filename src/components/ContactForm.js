import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import queryString from 'querystring';
import Constants from '../config';
import isset from '../utilities/isset';
import Loading from './Loading';

class ContactForm extends React.Component {
    state = {
        loading: false,
        showErrors: false,
        messageError: '',
        messageSuccess: '',
        form: {
            name: '',
            email: '',
            message: ''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        if (e) e.preventDefault();
        if (this.state.form.name === "" ||
            this.state.form.message === "" ||
            this.state.form.email === "") {
            this.setState({ showErrors: true });
        } else {
            this.setState({ loading: true });
            fetch(Constants.urlServerPHP + '/contact', {
                method: 'POST',
                body: queryString.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status) {
                        if (isset(response.errors)) {
                            this.setState({ messageError: "Ups ha ocurrido un error, contacte al administrador del sistema. " + Constants.emailAdministrator });
                        } else {
                            this.setState({
                                showErrors: false,
                                messageSuccess: "La consulta se envio con éxito, te responderemos a la brevedad.",
                                messageError: '',
                                form: {
                                    name: '',
                                    email: '',
                                    message: ''
                                }
                            });
                        }
                    } else {
                        this.setState({ messageError: "Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. " + Constants.emailAdministrator });
                    }
                    this.setState({ loading: false });
                });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Loading loading={this.state.loading} />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="contact.form.name" /></label>
                        <FormattedMessage locale={this.props.lang} id="contact.form.name">
                            {
                                placeholder =>
                                    <input
                                        onChange={this.handleChange}
                                        type="text"
                                        className={(this.state.showErrors && this.state.form.name === "") ? "form-control formInputError" : "form-control"}
                                        id="inputName"
                                        name="name"
                                        placeholder={placeholder}
                                        value={this.state.form.name} />
                            }
                        </FormattedMessage>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="contact.form.email" /></label>
                        <FormattedMessage locale={this.props.lang} id="contact.form.email" >
                            {
                                placeholder =>
                                    <input
                                        onChange={this.handleChange}
                                        type="email"
                                        className={(this.state.showErrors && this.state.form.email === "") ? "form-control formInputError" : "form-control"}
                                        id="inputEmail"
                                        name="email"
                                        placeholder={placeholder}
                                        value={this.state.form.email} />
                            }
                        </FormattedMessage>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="contact.form.message" /></label>
                        <FormattedMessage locale={this.props.lang} id="contact.form.email" >
                            {
                                placeholder =>
                                    <textarea
                                        onChange={this.handleChange}
                                        className={(this.state.showErrors && this.state.form.message === "") ? "form-control formInputError" : "form-control"}
                                        id="inputMessage"
                                        name="message"
                                        placeholder={placeholder}
                                        rows="3"
                                        value={this.state.form.message} />
                            }
                        </FormattedMessage>

                    </div>
                    {
                        this.state.messageSuccess !== '' &&
                        <p className="alert alert-info">{this.state.messageSuccess}</p>
                    }
                    {
                        this.state.messageError !== '' &&
                        <p className="alert alert-danger">{this.state.messageError}</p>
                    }
                    <button
                        type="submit"
                        className="btn btn-primary">
                        <FormattedMessage locale={this.props.lang} id="contact.form.send" />
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props
    }
}

export default connect(mapStateToProps)(ContactForm);