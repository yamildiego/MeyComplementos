import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
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

const homeContainer = document.getElementById("root");

ReactDOM.render(<App />, homeContainer);