import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/store';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { HashRouter } from 'react-router-dom';
import Router from '../src/router/Router';

const store = createStore(reducer);

const app = (<Provider store={store}>  <HashRouter basename="/Sandvine"><Router />   </HashRouter></Provider>);

ReactDOM.render(app, document.getElementById('root'));