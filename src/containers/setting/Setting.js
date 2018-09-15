import React from 'react';
import {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SettingList from './List';
import FHHeader from '../../components/FHHeader'
import {storeToken, storeRefresh} from '../../config/token';
import {navigate} from '../../../NavigationService';
async function logout()
{
    await storeToken("");
    await storeRefresh("");
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
                <TouchableOpacity onPress={logout}>
                    <Text onPress={logout} style={{margin:30}}>خروج از حساب</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Setting;