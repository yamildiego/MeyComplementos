import React from 'react';
import Menu from '../Menu/Menu'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu></Menu>
                <Body></Body>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;