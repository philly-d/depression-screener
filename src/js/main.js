import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
// import DevTools from './containers/DevTools';

const store = configureStore();
const rootElement = document.getElementById('app');

// Base app component boilerplate
const App = (props) => <div>I'm the app</div>

let ComponentEl;

if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./containers/DevTools').default;

    // If using routes
    ComponentEl = (
        <div>
            <App />
            <DevTools />
        </div>
    );
} else {
    ComponentEl = (
        <div>
            <App />
        </div>
    );
}

// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        { ComponentEl }
    </Provider>,
    rootElement
);
