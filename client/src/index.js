import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './utils/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App store={store} />, document.getElementById('root'));