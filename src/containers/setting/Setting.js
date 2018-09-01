import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import SettingList from './List';
import FHHeader from '../../components/FHHeader'
import {storeToken} from '../../config/token';
import {navigate} from '../../../NavigationService';
async function logout()
{
    await storeToken("");
    navigate('Login');
}
const Setting = (props) => {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <FHHeader navigation={props.navigation} title="تنظیمات"/>
            <View style={{flex:2}}>

            </View>
            <View style={{flex:3}}>
                <SettingList navigation={props.navigation}/>
            </View>
            <View style={{flex:15, alignItems:'center', flexDirection:'column-reverse'}}>
                <Text onPress={logout} style={{margin:30}}>خروج از حساب</Text>
            </View>
        </View>
    )
}

export default Setting;