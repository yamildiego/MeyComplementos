import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DeliveryData extends React.Component {
    state = {
        showErrors: this.props.showErrors,
        form: {
            ...this.props.dataPeronal
        }
    }
    handleChange = e => this.props.handleChangeDataPersonal(e);
    handleClickNext = e => this.props.nextStep(e);
    componentWillReceiveProps = nextProps => {
        if (this.state.form !== nextProps.dataPeronal)
            this.setState({
                form: {
                    ...nextProps.dataPeronal
                }
            })
        if (this.state.showErrors !== nextProps.showErrors)
            this.setState({ showErrors: nextProps.showErrors })
    }
    render() {
        return (
            <React.Fragment>
                <h1><FormattedMessage locale={this.props.lang} id="delivery_data.title" /></h1>
                <div className="DeliveryData">
                    <form className="row" onSubmit={this.handleClickNext}>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="delivery_data.name" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.name">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className={(this.state.showErrors && this.state.form.name === "") ? "form-control formInputError" : "form-control"}
                                            id="name"
                                            name="name"
                                            placeholder={placeholder}
                                            value={this.state.form.name}
                                        />
                                }
                            </FormattedMessage>

                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastname"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="delivery_data.lastname" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.lastname">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className={(this.state.showErrors && this.state.form.lastname === "") ? "form-control formInputError" : "form-control"}
                                            id="lastname"
                                            name="lastname"
                                            placeholder={placeholder}
                                            value={this.state.form.lastname}
                                        />
                                }
                            </FormattedMessage>
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="country"><FormattedMessage locale={this.props.lang} id="delivery_data.country" /></label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                value="Australia"
                                disabled
                            />
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="street"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="delivery_data.street" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.street">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className={(this.state.showErrors && this.state.form.street === "") ? "form-control formInputError" : "form-control"}
                                            id="street"
                                            name="street"
                                            placeholder={placeholder}
                                            value={this.state.form.street}
                                        />
                                }
                            </FormattedMessage>

                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="floor"><FormattedMessage locale={this.props.lang} id="delivery_data.flour" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.flour">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className="form-control"
                                            id="floor"
                                            name="floor"
                                            placeholder={placeholder}
                                            value={this.state.form.floor}
                                        />
                                }
                            </FormattedMessage>

                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="phone"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="delivery_data.phone" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.phone">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="text"
                                            className={(this.state.showErrors && this.state.form.phone === "") ? "form-control formInputError" : "form-control"}
                                            id="phone"
                                            name="phone"
                                            placeholder={placeholder}
                                            value={this.state.form.phone}
                                        />

                                }
                            </FormattedMessage>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="email"><span className="required">(*)</span><FormattedMessage locale={this.props.lang} id="delivery_data.email" /></label>
                            <FormattedMessage locale={this.props.lang} id="delivery_data.email">
                                {
                                    placeholder =>
                                        <input
                                            onChange={this.handleChange}
                                            type="email"
                                            className={(this.state.showErrors && this.state.form.email === "") ? "form-control formInputError" : "form-control"}
                                            id="email"
                                            name="email"
                                            placeholder={placeholder}
                                            value={this.state.form.email}
                                        />
                                }
                            </FormattedMessage>

                        </div>
                        <div className="col-12 text-center mt-4">
                            <button
                                type="button"
                                onClick={this.props.backStep}
                                className="btn btn-outline-dark btn-lg mr-5 mt-2 w-xs-100">
                                <FormattedMessage locale={this.props.lang} id="delivery_data.back" />&nbsp;&nbsp;
                                </button>
                            <button
                                className="btn btn-outline-success btn-lg mt-2 w-xs-100">
                                <FormattedMessage locale={this.props.lang} id="delivery_data.next" />&nbsp;&nbsp;
                                <FontAwesomeIcon icon="long-arrow-alt-right" />
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang
    }
}

export default connect(mapStateToProps)(DeliveryData);