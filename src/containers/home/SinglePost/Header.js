import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import colors from '../../../config/colors'

import {navigate} from '../../../../NavigationService';
import FHBackIcon from '../../../components/FHBackIcon';

const SinglePostHeader = () => {
    
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>
                 <Button transparent rounded primary style={{borderRadius:50}}   onPress={() => {}}>
                    <Icon style={{color:'white'}} name='more-horizontal' type="Feather"/>
                </Button>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
            </Body>
            <Right style={{flex:1}}>
                <FHBackIcon />
            </Right>
        </Header>    
    )
} 
export default SinglePostHeader;
