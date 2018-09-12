
import {createBottomTabNavigator} from 'react-navigation';
import Profile from '../profile/Profile';
import Home from '../../containers/home/Home';
import Notifications from '../notifications/Notifications';
import React , {Component} from 'react';
import Search from '../search/Search';
import PopularTags from '../search/PopularTags';
import colors from '../../config/colors';
import {HomeIcon, ProfileIcon, NotifiactionIcon, SearchIcon} from './Icons';
import { Dimensions, View, SafeAreaView} from 'react-native';
import {ifIphoneX, getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import PlusButton from './PlusButton';
import {getNotifications, notificationsInit} from '../../actions/notifications/requestActions';
import { rest } from '../../config/urls';
import {connect} from 'react-redux';
let heightOfTabBar = Dimensions.get("window").height * 9/ 100;
if(isIphoneX())
{
    heightOfTabBar = Dimensions.get("window").height * 9/ 100 - getStatusBarHeight();
           
}
const BottomRouter =  createBottomTabNavigator({
   Profile:{
       screen : Profile,
       navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <ProfileIcon tintColor={tintColor}/>)
        })
       
   },
   Home:{
       screen : Home,
       navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <HomeIcon tintColor={tintColor}/>)
        })
   },
   Search : {
       screen : PopularTags,
       navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <SearchIcon tintColor={tintColor}/>)
        })
   },
   Notifications : {
       screen : Notifications,
       navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <NotifiactionIcon tintColor={tintColor}/>)
        })
   },
   AddPost : {
       screen : () => null
   }
},{
    initialRouteName: 'Home',
    order : ['Profile', 'Notifications', 'AddPost', 'Search', 'Home'],
    tabBarOptions:{
        activeTintColor: colors.bottomTabBarActive,
        inactiveTintColor: colors.bottomTabBarInActive,
        style: { backgroundColor: colors.bottomTabBar, height: heightOfTabBar , zIndex:50},
        showLabel : false,
        
    },
    navigationOptions: () => ({
        tabBarOnPress: ({navigation, defaultHandler}) => {
            if(navigation.state.routeName !== "AddPost")
            {
                defaultHandler();
            }
            else{
                () => {}
            }
        },
            
        
    }),

    
    
    
});
class BottomTab extends Component{
    constructor(props)
    {
        super(props);
        setInterval(() => {
            this.props.notificationsInit();
            this.props.getNotifications(rest.notifications);
        },5 * 60000);
    }
    render() {
    return (
        <View style={{flex:1}}>
                <BottomRouter />
                <PlusButton heightOfTabBar = {heightOfTabBar}/>
            </View>
    );
}
}
const mapDispatchToProps = dispatch => {
    return({
        notificationsInit : () => dispatch(notificationsInit()),
        getNotifications : (url) => dispatch(getNotifications(url))
    })
}

export default connect(null,mapDispatchToProps)(BottomTab);
// export default BottomRoute;