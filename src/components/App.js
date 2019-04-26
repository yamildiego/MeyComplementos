import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutApp from './AppLayout';
import Home from '../pages/Home';
import PaymentMethods from '../pages/PaymentMethods/PaymentMethods';
import Contact from '../pages/Contact';
import HandleError from './HandleError';

class App extends React.Component {
    render() {
        return (
            <Router basename="/">
                <LayoutApp >
                    <HandleError>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/medios-de-pago" component={PaymentMethods} />
                            <Route exact path="/contacto" component={Contact} />
                        </Switch>
                    </HandleError>
                </LayoutApp>
            </Router>
        )
    }
}

export default App;