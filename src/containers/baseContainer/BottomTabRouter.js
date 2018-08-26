import {createBottomTabNavigator} from 'react-navigation';
import Profile from '../profile/Profile';
import {Test as Home} from './TestComp';
import {Test as Search} from './TestComp';
import {Test as Notifications} from './TestComp';
import React from 'react';
import colors from '../../config/colors';
import {HomeIcon, ProfileIcon, NotifiactionIcon, SearchIcon} from './Icons';
import { Dimensions, View, SafeAreaView} from 'react-native';
import {ifIphoneX, getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import PlusButton from './PlusButton';
let heightOfTabBar = Dimensions.get("window").height * 9/ 100;
if(isIphoneX())
{
    heightOfTabBar = Dimensions.get("window").height * 9/ 100 - getStatusBarHeight();
           
}
const BottomRoute =  createBottomTabNavigator({
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
       screen : Search,
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
    initialRouteName: 'Profile',
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

export default (props) => (
   
       <View style={{flex:1}}>
            <BottomRoute/>
            <PlusButton heightOfTabBar = {heightOfTabBar}/>
        </View>
   );

// export default BottomRoute;