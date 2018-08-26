import React from 'react';
import { View, Text } from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import styles from './styles'

const ProfileHeader = (props) => {
    return (
        // <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#393939'}}>
        <Header>
            <Left style={{flex:1}}>
                <Text style={styles.editButton}>ویرایش</Text>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Text style={styles.username}>{props.username}</Text>
            </Body>
            <Right style={{flex:1}}>
                <Button transparent>
                    <Icon style={{color:'white'}} name='cog'/>
                </Button>
            </Right>
        </Header>    
        // </View>
    )
} 

export default ProfileHeader;