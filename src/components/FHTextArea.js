import React from 'react';
import {Input, Form , Textarea, Item, Label, Icon} from 'native-base';
import colors from '../config/colors';
import styles from './styles';
const FHTextarea = (props) => {
  return (<Textarea style={[styles.textAreaItem, {textAlign:"right"}]} placeholder={props.text}
          placeholderTextColor={colors.blackGrey} onChangeText={props.onTextChange} ></Textarea>);
}

export default FHTextarea;