import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LayoutApp from '../components/AppLayout/AppLayout';
import Menu from '../components/Menu/Menu';
import Home from './Home';
import Footer from '../components/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <LayoutApp >
                <Router basename="/">
                    <div>
                        <Menu></Menu>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/medios-de-pago" component={PaymentMethods} /> */}
                        {/* <Route exact path="/contacto" component={Contact} /> */}
                        <Footer></Footer>
                    </div>
                </Router>
            </LayoutApp>
        )
    }
}


function PaymentMethods() {
    return (
        <div>MEDIOS DE PAGO</div>
    )
}

function Contact() {
    return (
        <div>CONTACTO</div>
    )
}

export default App;