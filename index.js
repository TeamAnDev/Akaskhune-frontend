/** @format */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AkaskhuneApp from './src/reducers/index';
const store = createStore(AkaskhuneApp);

const Container = (props) => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Container);
