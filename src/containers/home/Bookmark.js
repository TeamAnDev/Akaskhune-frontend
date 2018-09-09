import React, { Component } from 'react'
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {Icon, Card, CardItem} from 'native-base';
import {Text} from 'react-native';
import {FlatList} from 'react-native';
import colors from '../../config/colors';
import Modal from 'react-native-modal';

const BoardAddingHeader = () => ( 
    <CardItem  bordered style={{borderRadius: 8, height:HeighOfTitle, alignItems :  "center", justifyContent : 'center', flexDirection:'column'}}>
      <Text style={{color:'black'}}>اضافه به علاقه‌مندی‌ها</Text>
      <Text style={{color: colors.blackGrey}}>یکی از بورد‌های زیر رو انتخاب کنید</Text>
    </CardItem>);

const BoardsList = ({boards, endLoading, loading, url, boardsListRequest}) => (
  <FlatList
    style = {{backgroundColor: 'white'}}
    data = {boards}

    ListFooterComponent =
    {endLoading  || loading? <Spinner color={colors.accentColor}/> : url !== null ? 
        <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
            <TouchableOpacity
            onPress = {() => {if(!loading){boardsListRequest(url)}}} >
                <Icon type="EvilIcons" name="plus" style={{fontSize:50, padding:10}}/>
            </TouchableOpacity>
        </View>
        : null}
    
    renderItem = {({item}) =>{}}
    />
)



const ModalWidth = Dimensions.get("window").width * 300 / 360;
const ModalHeight = Dimensions.get("window").height * 400 / 640;
const HeighOfTitle = Dimensions.get("window").height * 75/640;
export default class Bookmark extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isModalVisible : false,
    }
  }

  setModalVisibility = (isModalVisible) => {
    this.setState({isModalVisible : isModalVisible});
  }

  render() {
    return (
      <View>
         <TouchableOpacity onPress={()=>{this.setModalVisibility(true)}}>
              <Icon name='bookmark' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
          </TouchableOpacity>

          <Modal isVisible={this.state.isModalVisible} style={{justifyContent:'center', alignItems:'center'}}
                  onBackdropPress = {() => this.setModalVisibility(false)}>
            <Card style={{width:ModalWidth, height:ModalHeight, borderRadius:8}}>
              <BoardAddingHeader/>
              
            </Card>
          </Modal>
      </View>
      
    )
  }
}

