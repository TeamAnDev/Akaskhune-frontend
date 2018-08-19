import React from 'react';
import {Component} from 'react';
import {MKTextField, mdl} from 'react-native-material-kit';
import styles from './styles';
import {Input, Form , Item, Label} from 'native-base';

const PasswordInput =  (props)=>{
    const PassInput = mdl.Textfield.textfieldWithFloatingLabel()
    .withPassword(true)
    .withPlaceholder('رمز‌عبور')
    .withTextInputStyle(styles.textfieldWithFloatingLabel)
    .withFloatingLabelFont(styles.inputFontStyle)
    .withOnChangeText(props.onTextChange)
    .build();
    // return (<PassInput/>)
    return (<Form>
        <Item floatingLabel style={styles.inputItemStyle}>
        <Label>رمز عبور</Label>
        <Input secureTextEntry onChangeText={props.onTextChange} style={styles.inputFontStyle}/>
      </Item>
      </Form>)
}
export default PasswordInput;