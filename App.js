/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import akaskhune from './native-base-theme/variables/akaskhune';
import Router from './Router';
import { setTopLevelNavigator} from './NavigationService';
import EditProfile from './src/containers/setting/editProfile/EditProfile';
import Sample from './sample';
import InviteFriends from './src/containers/inviteFriends/inviteFriends';
import Setting from './src/containers/setting/Setting';
console.disableYellowBox = false;
export default class App extends Component {
  render() {
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