import React from 'react';
import { View, Text } from "react-native";
import {Button, Icon} from 'native-base'
const Details = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{marginTop:10, marginLeft: 10}}>ویرایش</Text>
            <Text style={{marginTop:10}}>{props.username}</Text>
            <Button transparent>
                <Icon style={{color:'black'}} name='cog'/>
            </Button>
        </View>
    )
} 

export default Details;