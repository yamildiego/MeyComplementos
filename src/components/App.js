import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutApp from './AppLayout';
import Home from '../pages/Home';
import PaymentMethods from '../pages/PaymentMethods/PaymentMethods';
import Contact from '../pages/Contact';
import CookiesPolicy from '../pages/CookiesPolicy';
import HandleError from './HandleError';
import AlertCookies from './AlertCookies';
import OrderCompleted from './OrderCompleted';

class App extends React.Component {
    render() {
        return (
            <Router basename="/">
                <LayoutApp >
                    <AlertCookies />
                    <HandleError>
                        <Switch>
                            <Route exact path="/" render={(props) => <Home {...props} />} />
                            <Route exact path="/medios-de-pago" component={PaymentMethods} />
                            <Route exact path="/contacto" component={Contact} />
                            <Route exact path="/politica-de-cookies" component={CookiesPolicy} />
                        </Switch>
                    </HandleError>
                </LayoutApp>
            </Router>
        )
    }
}


export default App;