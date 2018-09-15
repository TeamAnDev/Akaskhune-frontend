import React, { Component } from 'react'
import {View, FlatList,Text, Dimensions, RefreshControl} from 'react-native';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import {getNotifications, notificationsInit} from '../../actions/notifications/requestActions';
import { rest } from '../../config/urls';
import { Tabs, Tab } from 'native-base';
import Yours from './Yours';
import {getActivities, activitiesInit} from '../../actions/notifications/activities';
import Activities from './Activites';
import NotificationsHeader from './NotificationsHeader';


class Notifications extends Component {
  constructor(props)
  {
    super(props);
    this.refreshNotifications();
    this.refreshActivities();
    // this.onEndReachedCalledDuringMomentum = true;
  }
  refreshNotifications = () => {
    this.props.notificationsInit();
    this.props.getNotifications(rest.notifications);
  }
  refreshActivities = () => {
    this.props.activitiesInit();
    this.props.getActivities(rest.activities);
  }

  render() {
   
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <NotificationsHeader/>
        <Tabs
        tabContainerStyle = {{backgroundColor : 'white'}} 
        tabBarInactiveTextColor="white"
        locked = {true}
        // style = {{height : heightOfHeader}}
        >
          <Tab 
          tabStyle={{backgroundColor : colors.primaryColor}}
          activeTextStyle = {{color : 'white'}} 
          activeTabStyle = {{backgroundColor : colors.primaryColor}} 
          textStyle = {{color:'white'}}
          heading="شما">
            <Yours 
            data = {this.props.notifications} 
            loading = {this.props.loading} 
            refresh = {this.refreshNotifications}/>
          </Tab>
          <Tab 
          tabStyle={{backgroundColor : colors.primaryColor}} 
          activeTextStyle = {{color : 'white'}} 
          textStyle = {{color:'white'}}
          activeTabStyle = {{backgroundColor : colors.primaryColor}} 
          heading="دنبال‌شوندگان">
            <Activities
            data = {this.props.activities} 
            loading = {this.props.activitiesLoading} 
            refresh = {this.refreshActivities}/>

          </Tab>
        </Tabs>
        
      </View>
    )
  }
}
const mapStateToProps = state => {
    return({
      loading : state.notificationsApp.notificationsRequestReducer.loading,
      url : state.notificationsApp.notificationsRequestReducer.url, 
      notifications : state.notificationsApp.notificationsRequestReducer.notifications,
      activitiesLoading : state.notificationsApp.activitiesRequestReducer.loading,
      activitiesUrl : state.notificationsApp.activitiesRequestReducer.url ,
      activities : state.notificationsApp.activitiesRequestReducer.activities
    })
}

const mapDispatchToProps = dispatch => {
    return({
        notificationsInit : () => dispatch(notificationsInit()),
        getNotifications : (url) => dispatch(getNotifications(url)),
        activitiesInit : () => dispatch(activitiesInit()),
        getActivities : (url) => dispatch(getActivities(url)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);