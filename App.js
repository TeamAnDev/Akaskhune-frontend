/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import akaskhune from './native-base-theme/variables/akaskhune';
import Router from './Router';
import { setTopLevelNavigator} from './NavigationService';
import EditProfile from './src/containers/setting/editProfile/EditProfile';
export default class App extends Component {
  render() {
    return (
      <StyleProvider  style={getTheme(akaskhune)}>
      <View style={{flex:1}}>
        <Router  ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}/>
      </View>
      </StyleProvider>
    );
  }
}