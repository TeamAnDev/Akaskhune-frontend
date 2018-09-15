import React, { Component } from 'react'
import {View, TouchableOpacity, Dimensions} from 'react-native';
import { Card, CardItem, Spinner, Item, Input, Icon} from 'native-base';
import {Text} from 'react-native';
import {FlatList, ScrollView} from 'react-native';
import colors from '../../config/colors';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {allBoardsRequest, initAllBoards} from '../../actions/board/boardRequest';
import { rest } from '../../config/urls';
import BoardsList from './BookmarkComponents/BoardsList';
import {addBoardRequest} from '../../actions/board/addBoardRequest';
import BoardAddInput from './BookmarkComponents/BoardAddInput';
import {addPostsToBoardRequest} from '../../actions/board/addPostsToBoard';
import showSuccess from '../../components/Toasts/showSucces';
import showError from '../../components/Toasts/showError';

const BoardAddingHeader = () => ( 
    <CardItem  bordered style={{borderRadius: 8, height:HeighOfTitle, alignItems :  "center", justifyContent : 'center', flexDirection:'column'}}>
      <Text style={{color:'black'}}>اضافه به علاقه‌مندی‌ها</Text>
      <Text style={{color: colors.blackGrey}}>یکی از بورد‌های زیر رو انتخاب کنید</Text>
    </CardItem>);




const ModalWidth = Dimensions.get("window").width * 300 / 360;
const ModalHeight = Dimensions.get("window").height * 400 / 640;
const HeighOfTitle = Dimensions.get("window").height * 75/640;
class Bookmark extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isModalVisible : false,
    }
    
  }

  setModalVisibility = (isModalVisible) => {
    this.setState({isModalVisible : isModalVisible});
    if(isModalVisible == true)
    {
      this.props.initAllBoards();
      this.props.allBoardsRequest(rest.allBoards);
    }
  }
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.success && nextProps.success !== this.props.success)
    {
      showSuccess("پست با موفقیت به بورد اضافه شد", undefined, 3000);
    }
    if(nextProps.errbool && nextProps.errbool !== this.props.errbool)
    {
      showError(nextProps.error, undefined, 2000);
    }
  }
  addBoard = (name) => {
    this.props.addNewBoard(name, this.props.postId);
    this.setModalVisibility(false);
  }
  addPostToBoard = (boardId) =>
  {
    posts = [this.props.postId];
    this.props.addPostsToBoard(posts, boardId);
    this.setModalVisibility(false);
  }
  render() {
    return (
      <View>
         <TouchableOpacity onPress={()=>{this.setModalVisibility(true)}}>
              <Icon name='bookmark' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
          </TouchableOpacity>

          <Modal 
          isVisible={this.state.isModalVisible} 
          style={{justifyContent:'center', alignItems:'center'}}
          onBackdropPress = {() => this.setModalVisibility(false)}
          animationIn = "zoomIn"
          animationInTiming = {200}
          animationOut = "zoomOut">
            <Card style={{width:ModalWidth, height:ModalHeight, borderRadius:8}}>
              
                <BoardAddingHeader/>

                <BoardAddInput
                addNewBoard = {this.addBoard}
                />
                
                <BoardsList 
                boards = {this.props.boards}
                loading = {this.props.loading}
                url = {this.props.url}
                boardsListRequest = {this.props.allBoardsRequest}
                addPostToBoard = {this.addPostToBoard}
                />
              

            </Card>
          </Modal>
      </View>
      
    )
  }
}


const mapStateToProps = state => {
    return({
        boards : state.boardsApp.allBoardsRequestReducer.boards,
        loading : state.boardsApp.allBoardsRequestReducer.loading,
        url : state.boardsApp.allBoardsRequestReducer.next,
        newBoard : state.boardsApp.addBoardReducer.board,
        success : state.boardsApp.addPostsToBoardReducer.success,
        errbool : state.boardsApp.addPostsToBoardReducer.errbool,
        error : state.boardsApp.addPostsToBoardReducer.error,
        successAddingBoard : state.boardsApp.addBoardReducer.success,

    });
}

const mapDispatchToProps = dispatch => {
    return({
       initAllBoards : () => dispatch(initAllBoards()),
       allBoardsRequest : (url) => dispatch(allBoardsRequest(url)),
       addNewBoard :  (name, postId) =>  dispatch(addBoardRequest(name, postId)),
       addPostsToBoard : (posts, boardId) => dispatch(addPostsToBoardRequest(posts, boardId)),
      
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);