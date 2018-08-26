import React from 'react';
import { View, Text } from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import styles from './styles'

const ProfileHeader = (props) => {
    return (
        <Header>
            <Left style={{flex:1}}>
                <Text style={styles.editButton}>ویرایش</Text>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Text style={styles.username}>{props.username}</Text>
            </Body>
            <Right style={{flex:1}}>
                <Button transparent>
                    <Icon style={{color:'white'}} name='cog' onPress={() => props.navigation.navigate('Setting')}/>
                </Button>
            </Right>
        </Header>    
    )
} 

export default ProfileHeader;