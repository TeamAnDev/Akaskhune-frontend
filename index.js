/** @format */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import AkaskhuneApp from './src/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(AkaskhuneApp, applyMiddleware(thunk));

const Container = (props) => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Container);
