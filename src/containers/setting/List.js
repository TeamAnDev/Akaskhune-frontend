import React, {Component} from 'react';
import {Text, View} from 'react-native'
import { Icon } from 'native-base';
import styles from './styles'

const SettingList = () => {
       return (
            <View style={styles.listItem}>
                <Text>تغییر رمز عبور</Text>
                <Icon name="arrow-back"/>
            </View>
        )
    }        

export default SettingList;