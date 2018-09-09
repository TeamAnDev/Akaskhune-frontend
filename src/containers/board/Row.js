import React from 'react';
import {View} from 'react-native';
import SinglePhoto from './SinglePhoto';

const Row = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
            <SinglePhoto uri={props.leftImage}/>
            <SinglePhoto uri={props.rightImage}/>
        </View>
    )
}

export default Row;