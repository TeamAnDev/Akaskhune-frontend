import React from 'react';
import {Component} from 'react';
import {MKTextField} from 'react-native-material-kit';
import styles from './styles'
import colors from '../../../config/colors'
import {Input, Form , Item, Label, Icon} from 'native-base';

const EmailInput = (props) => {
  const MailInput = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('آدرس ایمیل')
  .withStyle({borderRadius : 50})
  .withTextInputStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont(styles.inputFontStyle)
  .withOnChangeText(props.onTextChange)
  .build();

  // return(<MailInput/>)
  return (<Form>
        <Item floatingLabel style={styles.inputItemStyle}>
       
        <Label>آدرس ایمیل</Label>
        <Input onChangeText={props.onTextChange}  />
      </Item>
      </Form>)
}

export default EmailInput;