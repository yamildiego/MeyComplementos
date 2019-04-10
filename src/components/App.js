import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutApp from './AppLayout';
import LogoPresentation from './LogoPresentation';
import Home from '../pages/Home';
import PaymentMethods from '../pages/PaymentMethods/PaymentMethods';
import Contact from '../pages/Contact';
import HandleError from './HandleError';

class App extends React.Component {
    state = {
        currentCount: 0,
        loading: true
    }
    componentDidMount() {
        this.countdown = setInterval(this.timer, 100);
    }
    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    timer = () => {
        if (this.state.currentCount >= 100) {
            this.setState({ loading: false });
            clearInterval(this.countdown);
        }
        else
            this.setState({ currentCount: (this.state.currentCount + 5) });
    }
    render() {
        return (
            this.state.loading
                ? <LogoPresentation progress={this.state.currentCount} />
                : <Router basename="/">
                    <LayoutApp >
                        <HandleError>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/medios-de-pago" component={PaymentMethods} />
                                <Route exact path="/contacto" component={Contact} />
                                {/* <Route path="/category/:id" component={Child} /> */}
                            </Switch>
                        </HandleError>
                    </LayoutApp>
                </Router>
        )
    }
}

export default App;