import React from 'react';
import {Component} from 'react';
import styles from "./styles";
import colors from '../config/colors';
import {Button, Text , Spinner} from 'native-base';

const FHButton = (props) => 
{
    
    const Loading = props.loading ? <Spinner color={colors.accentColor}  animating={props.loading}/> : null;
    return (<Button block rounded primary onPress={props.onPress} disabled={props.disabled || props.loading || false}
        style={styles.FHButton}>
        <Text>{props.title}</Text>
        {Loading}
        </Button>)
}

export default FHButton;