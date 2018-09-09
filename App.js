/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import akaskhune from './native-base-theme/variables/akaskhune';
import Router from './Router';
import { setTopLevelNavigator} from './NavigationService';

// console.disableYellowBox = true;
export default class App extends Component {
  render() {
    I18nManager.allowRTL(false);
    return (
      <StyleProvider  style={getTheme(akaskhune)}>
      <Root>
      <View style={{flex:1}}>
        <Router  ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}/>
      </View>
      </Root>
      </StyleProvider>
    );
  }
}