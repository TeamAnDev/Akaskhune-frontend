import React from 'react';
import {Component} from 'react';
import Info from './Info';
import ProfileHeader from './Header';
import {View, ScrollView, RefreshControl, Dimensions} from 'react-native';
import TabBox from './TabBox';

class UserProfile extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <ProfileHeader navigation={this.props.navigation} isSelf = {false}/>
                <View style={{flex:1}}>
                    <View style={{flex:105, marginTop:10}}>
                        <Info username = {this.props.navigation.getParam('username')}/>
                    </View>
                    <View style={{flex:350}}>
                        <TabBox username = {this.props.navigation.getParam('username')}/>
                    </View>
                </View>
            </View>
        )
    }

}

export default UserProfile;