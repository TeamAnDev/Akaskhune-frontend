import React from 'react';
import {
  View,TouchableOpacity, Text
} from 'react-native';
import { Icon } from 'native-base';
import colors from './src/config/colors';
import {navigate} from './NavigationService';

const NoConnectionScreen = () => (
    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
      <Icon type="Feather" name="wifi-off" style={{fontSize: 80,}}/>    
      <Text style={{padding:10}}>ارتباط شما با سرور برقرار نیست.</Text>
      <Text style={{padding:10}}>از اتصال خود به اینترنت مطمئن شوید و دوباره تلاش کنید.</Text>
      <TouchableOpacity onPress={()=>navigate('AuthLoadingScreen')}>
        <Text style={{padding:10, color:colors.accentColor}}>تلاش دوباره</Text>
      </TouchableOpacity>
    </View>
)

export default NoConnectionScreen;