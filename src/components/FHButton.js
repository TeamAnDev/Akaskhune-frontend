import React from 'react';
import {Component} from 'react';
import styles from "./styles";
import {Button, Text , Spinner} from 'native-base';

const FHButton = (props) => {
    const Loading = props.loading ? <Spinner animating={props.loading}/> : null;
    return (<Button block primary onPress={props.onPress} disabled={props.disabled || false}
        style={{ margin : 7,
            height : 55,
            borderRadius: 10,
            width : "88%",
            alignContent:"center",
            alignSelf: 'center'}}>
        <Text>{props.title}</Text>
        {Loading}
        </Button>)
}

export default FHButton;