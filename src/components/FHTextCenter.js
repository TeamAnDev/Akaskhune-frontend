import React from 'react';
import {Text} from 'react-native';
const FHTextCenter =(props) => (
<Text 
style = {{color:'white',
        alignSelf: 'center', 
        margin:10}} 
        onPress = {props.onPress}>
    {props.text}
</Text>);

export default FHTextCenter;