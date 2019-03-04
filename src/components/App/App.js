import React from 'react';
import Menu from '../Menu/Menu'
import './App.css';
// import Menu from './components/Menu/Menu';
// import Body from './src/playlist/components/Body/Body';
// import Footer from './src/playlist/components/Footer/Footer';
// import Media from './src/playlist/components/Media/media';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu></Menu>
                {/* <Body></Body> */}
                {/* <Footer></Footer> */}
            </div>
        )
    }
}

export default App;