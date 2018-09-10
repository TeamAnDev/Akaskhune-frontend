import React, {Component} from 'react';
import { TouchableOpacity, Dimensions} from 'react-native';
import {} from 'react-native-indicators';
import {CardItem, Icon, Item, Input} from 'native-base';
import colors from '../../../config/colors';

const InputHeight = Dimensions.get('window').height * 50/640;
class BoardAddInput extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      boardName : ""
    }
  }

  addBoard = () => {
      if(this.state.boardName)
      {
          this.props.addNewBoard(this.state.boardName);
      }
  }
  render()
  {
 return (
  <CardItem bordered style={{backgroundColor:colors.grey, height : InputHeight}}>
    <Item regular style={{borderColor:colors.grey}}>
      <Input 
        style={{textAlign: 'right'}}
        placeholder="ساخت بورد جدید"
        onChangeText = {(text) => {this.setState({boardName : text});}}/>

      <TouchableOpacity onPress = {this.addBoard}>
        <Icon type="Feather" name="plus"/>
      </TouchableOpacity>

    </Item>
  </CardItem>

)}
}

export default BoardAddInput