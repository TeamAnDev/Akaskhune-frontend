import React from 'react';
import { Text } from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import colors from '../../config/colors'



const NotificationsHeader = () => {
    
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>
                 
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Text style={{color:'white'}}>اطلاعیه‌ها</Text>
            </Body>
            <Right style={{flex:1}}>

                
            </Right>
        </Header>    
    )
} 
export default NotificationsHeader;
