import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from "redux-thunk";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './components/reducers/rootReducers';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-toggle/style.css';
import './bootstrap.min.css';
import './fonts/fonts.css';
import './animate.css';
import './index.css';

import {
    faCheckCircle,
    faTimes,
    faPlay,
    faPause,
    faSearch,
    faSpinner,
    faLongArrowAltRight,
    faLongArrowAltLeft,
    faVolumeUp,
    faVolumeMute,
    faCompress,
    faPlus,
    faMinus,
    faCircle,
    faCompressArrowsAlt,
    faTag,
    faShoppingBag,
    faHourglassHalf
} from '@fortawesome/free-solid-svg-icons';
import App from './components/App';

library.add(fab, faHourglassHalf, faShoppingBag, faPlus, faMinus, faCircle, faLongArrowAltRight, faLongArrowAltLeft, faSearch, faTag, faCheckCircle, faTimes, faPlay, faPause, faSpinner, faVolumeUp, faVolumeMute, faCompress, faCompressArrowsAlt);

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();