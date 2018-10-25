import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

const AppContainer = () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);

export default AppContainer;
