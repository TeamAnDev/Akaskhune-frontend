import {MKColor} from 'react-native-material-kit';
import React from 'react';
import {View, Text} from 'react-native';
const FHError = (props) => (<View style={{flex:1}}>
    <Text style={{color:MKColor.Red}}>{props.errorText}</Text>
    </View>)

export default FHError;