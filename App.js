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
import Signup from './src/containers/signup/Signup';
import SignupCompleteProfile from './src/containers/signupCompleteProfile/SignupCompleteProfile';
import colors from './src/config/colors';
import {createStackNavigator} from 'react-navigation';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import akaskhune from './native-base-theme/variables/akaskhune';
import Router from './Router';
import ProfileInfo from './src/containers/profile/Info'

export default class App extends Component {
  render() {
    return (
      <StyleProvider  style={getTheme(akaskhune)}>
      <View style={{flex:1}}>
        {/* <Router/> */}
<<<<<<< HEAD
        <ProfileInfo/>
=======
        <SignupCompleteProfile/>
>>>>>>> 09e93f17898500cbec84ef3bd2f9cabebfced965
      </View>
      </StyleProvider>
    );
  }
}