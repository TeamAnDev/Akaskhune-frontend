import React from 'react';
import {Component} from 'react';
import Info from './Info';
import ProfileHeader from './Header';
import {View, ScrollView, RefreshControl, Dimensions} from 'react-native';
import TabBox from './TabBox';

class Profile extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <ProfileHeader navigation={this.props.navigation} isSelf = {true}/>
                <View style={{flex:1}}>
                    <View style={{flex:105, marginTop:10}}>
                        <Info/>
                    </View>
                    <View style={{flex:350}}>
                        <TabBox/>
                    </View>
                </View>
            </View>
        )
    }

}

export default Profile;