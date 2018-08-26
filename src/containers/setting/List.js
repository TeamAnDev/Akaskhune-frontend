import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import { Icon } from 'native-base';
import styles from './styles'

const SettingList = (props) => {
       return (
            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('ChangePassword')}>
                <Text>تغییر رمز عبور</Text>
                <Icon name="arrow-back"/>
            </TouchableOpacity>
        )
    }        

export default SettingList;