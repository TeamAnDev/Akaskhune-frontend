import React from 'react';
import { View, Text } from 'react-native';
import {Button, Icon} from 'native-base';
import styles from './styles'

const Details = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#393939'}}>
            <Text style={styles.editButton}>ویرایش</Text>
            <Text style={styles.username}>{props.username}</Text>
            <Button transparent>
                <Icon style={{color:'white'}} name='cog'/>
            </Button>
        </View>
    )
} 

export default Details;