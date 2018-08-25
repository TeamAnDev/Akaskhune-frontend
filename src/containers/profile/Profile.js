import React from 'react';
import {Component} from 'react';
import Info from './Info';
import Details from './Details';
import {View} from 'react-native';
import TabBox from './TabBox';

class Profile extends Component {

    render() {
        return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Details username='Hamed_Kh'/>
            </View>
            <View style={{flex:3, marginTop:10}}>
                <Info/>
            </View>
            <View style={{flex:7}}>
                <TabBox/>
            </View>
        </View>
        )
    }

}

export default Profile;