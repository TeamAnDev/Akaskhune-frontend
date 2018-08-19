/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/containers/login/Login';
import colors from './src/config/colors';
import {setTheme} from 'react-native-material-kit';
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const customTheme = {
  accentColor : colors.accentColor,
  accentColorRGB : colors.accentColorRGB,
  primaryColor : colors.primaryColor,
  primaryColorRGB : colors.primaryColorRGB,
  fontColor : colors.fontColor,
 
}
setTheme(customTheme);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider  style={getTheme(material)}>
      <View style={{flex:1}}>
        <Login/>
        {/* <LoginInputs/> */}
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
