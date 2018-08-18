import React from 'react';
import {Component} from 'react';
import {MKButton} from 'react-native-material-kit';
import styles from './styles';

const LoginButton = (props) => {
    const ColoredRaisedButton = MKButton.coloredButton()
    .withText('ورود')
    .withStyle(styles.LoginButton)
    .withOnPress(() => {
        props.onPress();
    })
    .build();
    return (<ColoredRaisedButton/>);
}

export default LoginButton;