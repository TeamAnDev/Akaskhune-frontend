import React from 'react';
import { View, Text , TouchableHighlight} from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import colors from '../../config/colors'

import {navigate} from '../../../NavigationService';

const HomeHeader = (props) => {
    
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>
                 <Button transparent rounded primary style={{borderRadius:50}}   onPress={() => navigate('InviteFriends')}>
                    <Icon style={{color:'white'}} name='user-plus' type="Feather"/>
                </Button>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Text style={{color:'white'}}>عکاسخونه</Text>
            </Body>
            <Right style={{flex:1}}>

                {/* <Button transparent rounded primary style={{borderRadius:50}}   onPress={() => navigate('Setting')}>
                    <Icon style={{color:'white'}} name='cog'/>
                </Button> */}
            </Right>
        </Header>    
    )
} 
export default HomeHeader;
