import React from 'react';
import {Input, Form , Item, Label, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
import styles from './styles';
const FHInput = (props) => {
    // const styles = StyleSheet.create({
    //     textInput: {
    //      color: 'green',
    //      textDecorationColor:'red',
    //     },
    //    });
    
  return (<Item error={(props.error || false)} success={!props.error && true}  regular style={styles.inputItem}>
            <Input placeholderTextColor={colors.blackGrey}  style={{textAlign:"right"}} placeholder={props.text} onChangeText={props.onTextChange} 
              value={props.value ? props.value : null} disabled={props.disabled ? props.disabled : null}/>
         </Item>);
}

export default FHInput;