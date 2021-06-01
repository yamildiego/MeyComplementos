import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './styles/SearchLayout.css'

class Search extends React.Component {
    handleOnChange = event => {
        this.props.setFilterBySearch(event.target.value);
    }
    render() {
        return (
            <FormattedMessage locale={this.props.lang} id="nav.search">
                {
                    placeholder =>
                        <form className="Search">
                            <input
                                onChange={this.handleOnChange}
                                placeholder={placeholder}

                                className="Search-input"
                                value={this.props.valueSearch}
                                type="text" />
                        </form>
                }
            </FormattedMessage>

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

export default connect(mapStateToProps)(Search);