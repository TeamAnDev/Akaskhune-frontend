import React from 'react';
import { View, Text } from "react-native";
import {Button, Icon} from 'native-base'
const Details = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#8CB066'}}>
            <Text style={{marginTop:15, marginLeft: 10, fontWeight:'bold'}}>ویرایش</Text>
            <Text style={{marginTop:15}}>{props.username}</Text>
            <Button transparent>
                <Icon style={{color:'black'}} name='cog'/>
            </Button>
        </View>
    )
} 

export default Details;