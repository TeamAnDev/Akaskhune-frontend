import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import SettingHeader from './Header';
import SettingList from './List';

const Setting = () => {
    return (
        <View style={{flex:1}}>
            <SettingHeader/>
            <View style={{flex:2}}>
            </View>
            <View style={{flex:3}}>
                <SettingList/>
            </View>
            <View style={{flex:15, alignItems:'center', flexDirection:'column-reverse'}}>
                <Text style={{margin:30}}>خروج از حساب</Text>
            </View>
        </View>
    )
}

export default Setting;