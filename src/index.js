import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import './animate.css';
import './global.css';

import {
    faCheckCircle,
    faTimes,
    faPlay,
    faPause,
    faSearch,
    faSpinner,
    faLongArrowAltRight,
    faVolumeUp,
    faVolumeMute,
    faCompress,
    faCompressArrowsAlt,
    faTag
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faLongArrowAltRight, faSearch, faTag, faCheckCircle, faTimes, faPlay, faPause, faSpinner, faVolumeUp, faVolumeMute, faCompress, faCompressArrowsAlt);

import App from './components/App';

const homeContainer = document.getElementById("home-container");

ReactDOM.render(<App />, homeContainer);