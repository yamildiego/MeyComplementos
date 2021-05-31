import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './styles/MenuLeftLayout.css';


class MenuLeftLayout extends React.Component {
    render() {
        return (
            <div className="MenuLeftLayout">
                <p className="lead">
                    <FormattedMessage locale={this.props.lang} id="menu_left.title" />
                </p>
                {this.props.children}
            </div>
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

export default connect(mapStateToProps)(MenuLeftLayout);