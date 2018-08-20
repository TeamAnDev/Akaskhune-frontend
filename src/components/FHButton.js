import React from 'react';
import {Component} from 'react';
import styles from "./styles";
import {Button, Text } from 'native-base';

const FHButton = (props) => {
    return (<Button block primary onPress={props.onPress} 
        style={{ margin : 7,
            height : 55,
            borderRadius: 10,
            width : "88%",
            alignContent:"center",
            alignSelf: 'center'}}>
        <Text>{props.title}</Text>
        </Button>)
}

export default FHButton;