
import React from 'react';
import {View, Text} from 'react-native';
import colors from '../config/colors';
import akaskhuneTheme from '../../native-base-theme/variables/akaskhune';

const FHError = (props) => (<View style={{flex:1}}>
    <Text style={{color:'white', textAlign:"center", margin:10, borderRadius:5,padding:5,
    backgroundColor: props.errorText!== "" && props.errorText!== undefined ? akaskhuneTheme.brandWarning : null}}>{props.errorText}</Text>
    </View>)

export default FHError;