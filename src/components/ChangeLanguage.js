import React from 'react';
import localforage from 'localforage';
import { connect } from 'react-redux';
import * as actions from './actions/locale';

class ChangeLanguage extends React.PureComponent {
    handleLangSet = (lang) => {
        localforage.setItem('lang', lang);
        this.props.dispatch(actions.langSet(lang));
    }

    render() {
        return (
            <div>
                {
                    this.props.lang === "en" &&
                    <span onClick={() => this.handleLangSet("es")} >Español</span>
                }
                {
                    this.props.lang === "es" &&
                    <span onClick={() => this.handleLangSet("en")} >English</span>
                }
                <div>{this.props.lang}</div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(ChangeLanguage);