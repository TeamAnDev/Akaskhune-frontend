import React, { Component } from 'react'
import {View,Text, Dimensions} from 'react-native';
import { Icon } from 'native-base';
const heightOfEmptyNotificationView = Dimensions.get('window').height *3/4;
const EmptyNotificationsList = () => (
  <View style={{width : '100%', height : heightOfEmptyNotificationView, justifyContent : 'center', alignItems : 'center'}}>
    <Icon name="bell-off" type="Feather" style={{fontSize: 70,}}/>
    <Text style={{padding : 10, fontSize: 16}} >هیچ اطلاعیه‌ای وجود ندارد</Text>  
    <Text style={{padding : 10, fontSize: 16}} >برای بارگزاری مجدد میتوانید صفحه را پایین بکشید</Text>
  </View>
)
export default EmptyNotificationsList;