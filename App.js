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
import Profile from './src/containers/profile/Profile';
import TabBox from './src/containers/profile/TabBox';
import Setting from './src/containers/setting/Setting'
import ChangePassword from './src/containers/changePassword/ChangePassword';

export default class App extends Component {
  render() {
    return (
      <StyleProvider  style={getTheme(akaskhune)}>
      <View style={{flex:1}}>

        {/* <ChangePassword/>  */}
        <Router/>

      </View>
      </StyleProvider>
    );
  }
}