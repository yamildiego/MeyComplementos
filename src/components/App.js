import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import LayoutApp from './AppLayout';
import Home from '../pages/Home';
// import PaymentMethods from '../pages/PaymentMethods/PaymentMethods';
import Contact from '../pages/Contact';
import CookiesPolicy from '../pages/CookiesPolicy';
import HandleError from './HandleError';
import AlertCookies from './AlertCookies';
import localforage from 'localforage';
import * as actions from './actions/locale';

import lenguanges from './../lang';


class App extends React.Component {

    componentDidMount = () => {
        localforage.getItem('lang', (err, langLocalForage) => {
            let lang = "en";
            if (langLocalForage == null) {
                let navigatorLanguage = navigator.language.split("-")[0];
                if (navigatorLanguage !== undefined && Object.keys(lenguanges).includes(navigatorLanguage)) {
                    lang = navigatorLanguage;
                }
            } else {
                if (Object.keys(lenguanges).includes(langLocalForage)) {
                    lang = langLocalForage;
                }
            }

            this.props.dispatch(actions.langSet(lang))
        });
    }

    render() {
        return (
            <React.Fragment>
                <IntlProvider locale={this.props.lang} messages={lenguanges[this.props.lang]}>
                    <LayoutApp >
                        <AlertCookies />
                        <HandleError>
                            <Switch>
                                {/* <Route exact path="/" render={(props) => <Home {...props} />} /> */}
                                {/* <Route exact path="/medios-de-pago" component={PaymentMethods} /> */}
                                <Route exact path="/" component={Home} />
                                <Route exact path="/products" component={Contact} />
                                <Route exact path="/about-us" component={Contact} />
                                <Route exact path="/contact-us" component={Contact} />
                                <Route exact path="/cookies-policy" component={CookiesPolicy} />
                            </Switch>
                        </HandleError>
                    </LayoutApp>
                </IntlProvider>
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

export default withRouter(connect(mapStateToProps)(App));