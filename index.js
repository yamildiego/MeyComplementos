import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckCircle, faTimes);

import App from './src/components/App/App';

const app = document.getElementById("app");

ReactDOM.render(<App />, app);