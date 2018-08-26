import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Profile from '../profile/Profile';
import {View} from 'react-native';
import BottomNavigation from 'react-native-material-bottom-navigation';
import {IconTab} from 'react-native-material-bottom-navigation';
import {createBottomTabNavigator} from 'react-navigation';
import colors from '../../config/colors';
import BottomRoute from './BottomTabRouter';

// createBottomTabNavigator
export default class BaseWithBottomContainer extends Component {
    constructor(props){
        super(props);
    }
    tabs = [
      {
        key: 'games',
        icon: 'gamepad-variant',
        label: 'Games',
        pressColor: 'rgba(255, 255, 255, 0.16)'

      },
      {
        key: 'movies-tv',
        icon: 'movie',
        label: 'Movies & TV',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'music',
        icon: 'music-note',
        label: 'Music',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      }
    ]
    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
      <IconTab
        
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )

    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
           <Profile/>
          </View>
          <BottomNavigation
          style={{backgroundColor:colors.grey, borderColor:colors.blackGrey}}

            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
        
      )
    }
  }