import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import "./common/css/main.css";

import App from './views/main';

import loop from './loop'

import * as serviceWorker from './serviceWorker';
loop.install()

ReactDOM.render(<App loop={loop}/>, document.getElementById('root'));
serviceWorker.unregister();

