import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import  allReducers from './store/combines';
import App from './components/App';
import {composeWithDevTools} from "redux-devtools-extension";

import './styles/styleNote.css';
import './styles/index.css';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
