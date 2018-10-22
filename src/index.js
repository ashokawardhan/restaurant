import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(<AppContainer />, document.getElementById("root"));
    });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
