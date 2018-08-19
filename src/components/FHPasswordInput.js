
import React from 'react';
import {Input, Form , Item, Label, Icon} from 'native-base';
import colors from '../config/colors';
import styles from './styles';
const FHPasswordInput = (props) => {
    // const styles = StyleSheet.create({
    //     textInput: {
    //      color: 'green',
    //      textDecorationColor:'red',
    //     },
    //    });
    
  return (<Item regular style={styles.inputItem}>
            <Input placeholderTextColor={colors.blackGrey} 
            
            placeholder={props.text} onChangeText={props.onTextChange}
            secureTextEntry 
            style={{textAlign:"right"}}/>
         </Item>);
}

export default FHPasswordInput;