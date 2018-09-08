import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity
        , FlatList} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon, Spinner} from 'native-base';
import colors from '../../../config/colors';
import {commentListInitial, commentListRequest} from '../../../actions/home/comentsRequest';
import { rest } from '../../../config/urls';
import {connect} from 'react-redux';
import  {addReply} from '../../../actions/home/comments';
const Comment = (props) => {
    let widthOfAvatar = Dimensions.get('window').width * 30 / 360;
    widthOfAvatar = props.isReplay ? widthOfAvatar *3/4 : widthOfAvatar;
    return(
    <CardItem bordered>
      <Left>
          {!props.isReplay ? 
             <TouchableOpacity onPress={()=>{props.addReply(props.id, props.name)}}>
                <Text>
                    پاسخ
                </Text>
            </TouchableOpacity> : null}
           
        </Left>
        <Right>
            <View style={{flexDirection:'row'}}>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlign:'right', fontSize:11, paddingRight : 5}}>{props.time}</Text>
                        <Text style={{fontWeight : 'bold', textAlign:'right'}}>{props.name}</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'right'}}>{props.text}</Text>
                    </View> 
                </View>
                <View>
                <ImageBackground source={{uri :  props.profilePhotoUrl}}
                    style={{backgroundColor:colors.blackGrey, width:widthOfAvatar, height:widthOfAvatar
                        ,borderRadius:widthOfAvatar/2, margin:4, marginRight: props.isReplay ? 20 : undefined}}
                    imageStyle={{borderRadius:widthOfAvatar/2}}>
                </ImageBackground>
                </View>
            </View>
        </Right>
      
    </CardItem>
)}

class CommentList extends Component 
{
    constructor(props)
    {
        super(props);
       
        this.state={
            comments: []
        }
        this.refreshComments = this.refreshComments.bind(this);
    }
    
    refreshComments()
    {
        this.props.commentListInitial(this.props.id);
        this.props.commentListRequest(rest.commentList(this.props.id));
    }
    componentWillMount()
    {
        this.props.commentListInitial(this.props.id);
        this.props.commentListRequest(rest.commentList(this.props.id));
    }
    render(){
        console.warn(this.props.id, typeof(this.props.id))
    return (
            <FlatList
            style = {{backgroundColor: 'white'}}
            data = {this.props.comments}
            ListFooterComponent =
             {this.props.endLoading  || this.props.loading? <Spinner color={colors.accentColor}/> : this.props.url !== null ? 
                <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                    <TouchableOpacity
                    onPress = {() => {if(!this.props.loading){this.props.commentListRequest(this.props.url)}}} >
                        <Icon type="EvilIcons" name="plus" style={{fontSize:50, padding:10}}/>
                    </TouchableOpacity>
                </View>
                : null}
           
            renderItem = {({item}) =>
            { let comment = item;
            return <View>
                        <Comment
                        name = {comment.user_name}
                        time = {comment.created_at}
                        text = {comment.text}
                        profilePhotoUrl = {comment.avatar_url}
                        id = {comment.id}
                        addReply = {this.props.addReply}
                        isReplay = {false}/>
                        <FlatList
                        style = {{backgroundColor: 'white'}}
                        data = {comment.replies}
                        renderItem = {({item}) => 
                            <Comment
                            name = {item.user_name}
                            time = {item.created_at}
                            text = {item.text}
                            profilePhotoUrl = {item.avatar_url}
                            id = {item.id}
                            isReplay = {true}/>}
                        />
                    </View>}
                }/>
        
            )}
}
const mapStateToProps = state => {
    return({
        comments : state.homeApp.commentListReducer.comments,
        loading : state.homeApp.commentListReducer.loading,
        url : state.homeApp.commentListReducer.url,
        endLoading : state.homeApp.commentListReducer.endLoading,
    });
}

const mapDispatchToProps = dispatch => {
    return({
        commentListRequest : (url) => dispatch(commentListRequest(url)),
        commentListInitial : (postId) => dispatch(commentListInitial(postId)),
        addReply : (postId, userName) => dispatch(addReply(postId, userName)), 
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);