import React from 'react';
import {Component} from 'react';
import {MKTextField, mdl} from 'react-native-material-kit';
import styles from './styles';


const PasswordInput =  (props)=>{
    const PassInput = mdl.Textfield.textfieldWithFloatingLabel()
    .withPassword(true)
    .withPlaceholder('رمز‌عبور')
    .withTextInputStyle(styles.textfieldWithFloatingLabel)
    .withFloatingLabelFont(styles.inputFontStyle)
    .withOnChangeText(props.onTextChange)
    .build();
    return (<PassInput/>)
}
export default PasswordInput;