import React from 'react';
import {Icon} from 'native-base';
import colors from '../../config/colors';
import {View, Text, Dimensions} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';
export const emptyPost  = () => (
    <View style={{flex:1, height:Dimensions.get("window").height*3/4,  justifyContent:'center', alignItems:'center'}}>
    <Text style={{padding : 10}} >
            هیچ پستی برای نمایش به شما وجود ندارد.
        </Text>
        <Icon name="camera-off" type="Feather" style={{fontSize: 60,}} />
        
        <Text style={{padding : 10}} >
            برای بارگزاری مجدد صفحه را پایین بکشید.
        </Text>
    </View>
)

export const emptyPostLoading = () => (
    <View style={{flex:1, height:Dimensions.get("window").height*3/4,  justifyContent:'center', alignItems:'center'}}>
        <View style={{ height:80, width:80}}>
        <PulseIndicator count={8} size={70} color={colors.accentColor}/>
        </View>
        <Text>در حال دریافت اطلاعات</Text>
    </View>
)

