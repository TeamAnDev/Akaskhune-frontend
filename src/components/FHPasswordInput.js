
import React, {Component} from 'react';
import {Input, Form , Item, Label, Icon} from 'native-base';
import colors from '../config/colors';
import styles from './styles';
import {TextInput} from 'react-native';
let ref;
class FHPasswordInput extends Component {
  constructor(props)
  {
    super(props);
    this.input ={};
  }
  
  render()
  {
    return (<Item error={(this.props.error || false)} success={!this.props.error && true} regular style={styles.inputItem}>
              <Input placeholderTextColor={colors.blackGrey} 
              placeholder={this.props.text} onChangeText={this.props.onTextChange}
              secureTextEntry 
              style={{textAlign:"right"}}
              {...this.props}
              
            />
             
          </Item>);

  }
}

export default FHPasswordInput;