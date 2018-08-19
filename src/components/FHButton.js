import React from 'react';
import {Component} from 'react';
import {MKButton} from 'react-native-material-kit';
import styles from './styles';

const FHButton = (props) => {
    const ColoredRaisedButton = MKButton.coloredButton()
    .withText(props.title)
    .withStyle(styles.LoginButton)
    .withOnPress(() => {
        props.onPress();
    })
    .build();
    return (<ColoredRaisedButton/>);
}

export default FHButton;