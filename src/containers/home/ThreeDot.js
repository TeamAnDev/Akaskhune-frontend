import React, { Component } from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Icon, CardItem, Text} from 'native-base';
import colors from '../../config/colors';
import Modal from 'react-native-modal';
import {StyleSheet, Dimensions} from 'react-native';
import {unfollowRequest} from '../../actions/follow/followRequest';
import {deleteUserPost} from '../../actions/home/feedListsRequest';
import {blockPostRequest, deleteBlockedPost} from '../../actions/home/blockPost';
import {connect} from 'react-redux';
const ModalWidth = Dimensions.get("window").width * 280 / 330;
const heightOfCardItem = Dimensions.get("window").height * 50/640;
class ThreeDot extends Component {
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
  unfollowUser = () => {
    this.props.unfollow(this.props.username);
    this.props.deleteUserPostFromState(this.props.username);
    this.setModalVisibility(false)
  }
  blockPost = () => {
    this.props.blockPostRequest(this.props.postId);
    this.props.deleteBlockedPost(this.props.postId,);
    this.setModalVisibility(false)
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={()=>{this.setModalVisibility(true)}}>
                <Icon name="more-horizontal" type="Feather" style={{color:colors.fontColor, fontSize:20}}/>
      </TouchableOpacity>
      <Modal isVisible={this.state.isModalVisible}
                onBackdropPress = {() => this.setModalVisibility(false)}>
          <View style = {{width:ModalWidth, backgroundColor : 'white', borderRadius : 8}}>
            <TouchableOpacity onPress = {this.unfollowUser}>
            <CardItem bordered style={{borderRadius: 8, height : heightOfCardItem}}>
              <Text style={{textAlign : 'right', width : "100%"}}>دنبال نکردن {this.props.user_name}</Text>
            </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.blockPost}>
            <CardItem bordered style={{borderRadius: 8, height : heightOfCardItem}}>
              <Text style={{textAlign : 'right', width : "100%"}}>عدم نمایش این پست</Text>
            </CardItem>
            </TouchableOpacity>
          </View>
      </Modal>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return({
      unfollow : (username) => dispatch(unfollowRequest(username)),
      deleteUserPostFromState : (username) => dispatch(deleteUserPost(username)),
      blockPostRequest : (postId) => dispatch(blockPostRequest(postId)),
      deleteBlockedPost : (postId) => dispatch(deleteBlockedPost(postId)),
  });
}

export default connect(null, mapDispatchToProps)(ThreeDot);