import React from 'react';
import {Component} from 'react';
import {MKTextField} from 'react-native-material-kit';
import styles from './styles'
import colors from '../../../config/colors'

const EmailInput = (props) => {
  const MailInput = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('آدرس ایمیل')
  .withStyle({borderRadius : 50})
  .withTextInputStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont(styles.inputFontStyle)
  .withOnChangeText(props.onTextChange)
  .build();
  return(<MailInput/>)
}

export default EmailInput;