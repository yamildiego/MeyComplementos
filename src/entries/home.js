import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Animation from '../animate.css'
import { faCheckCircle, faTimes, faPlay, faPause, faSpinner, faVolumeUp, faVolumeMute, faCompress, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckCircle, faTimes, faPlay, faPause, faSpinner, faVolumeUp, faVolumeMute, faCompress, faCompressArrowsAlt);

import App from '../pages/containers/App';

const homeContainer = document.getElementById("home-container");

ReactDOM.render(<App />, homeContainer);