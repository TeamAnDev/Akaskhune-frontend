import React from 'react';
import {View} from 'react-native';
import SinglePhoto from './SinglePhoto';

const Row = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
            <SinglePhoto id={props.leftImage.id} uri={props.leftImage.uri}/>
            <SinglePhoto id={props.rightImage.id} uri={props.rightImage.uri}/>
        </View>
    )
}

export default Row;