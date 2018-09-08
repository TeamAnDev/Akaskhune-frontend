import React, { Component } from 'react'
import FHInput from '../../../components/FHInput';
import {View, Dimensions,TextInput, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';
import { connect } from 'react-redux';
import {deleteReply, commentRequestAction, changeComment, stopCommenting} from '../../../actions/home/comments';
import { Item, Input, Icon } from 'native-base';
import FHDotIndicator from '../../../components/Indicators/FHDotIndicator';

let cmInputRef = {};
const mainHeignt = Dimensions.get('window').height * 60/640;
class CommentInput extends Component 
{
    constructor(props)
    {
        super(props);
    
        
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.isReplay && nextProps.isReplay !== this.props.isReplay)
        {
            cmInputRef._root.focus();
        }
        if(!nextProps.commenting && this.props.commenting !== nextProps.commenting)
        {
            cmInputRef._root.focus();
        }
    }
    componentDidMount()
    {
        this.props.stopCommenting();
    }
    render() {
    const reply = this.props.isReplay ? 
    <View style={{ width: "100%", height: mainHeignt/2, backgroundColor: colors.meduimGrey , justifyContent:'center'}}>
        <Text style={{textAlign: 'right', padding :5, paddingRight : 10}}>
            {this.props.replyCmUserName}
        </Text>
        <TouchableOpacity style={{position:"absolute", left:15}} onPress={this.props.deleteReply}>
            <Icon name="close" style={{fontSize: 18,}}/>
        </TouchableOpacity>
    </View>: null;
    return (
        <View>
        {reply}
        <View style={{ width: "100%", height: mainHeignt, backgroundColor: colors.grey, alignItems:'center', justifyContent:'center'}}>
           <Item regular style={{backgroundColor:'white', width:'88%', height: '70%', borderRadius:mainHeignt/7}}>

                {!this.props.loading && this.props.comment !== ""? <TouchableOpacity 
                 onPress={() => {this.props.isReply ? this.props.sendComment(this.props.id, this.props.comment) : this.props.sendComment(this.props.id, this.props.comment, this.props.replyId)}}>
                    <Text style={{padding:10, color:'black', fontWeight:'bold'}}>
                        ارسال
                    </Text>
                </TouchableOpacity> : this.props.loading ? <FHDotIndicator size={5} /> : null}

                <Input style={{textAlign: 'right',}} onChangeText={this.props.changeComment} placeholder="نظر خودت رو بگو"
                        placeholderTextColor={colors.blackGrey} ref={input => {cmInputRef = input}} 
                        value = {this.props.comment}
                        returnKeyType = "send"
                        onSubmitEditing = {() => {this.props.isReply ? this.props.sendComment(this.props.id, this.props.comment) : this.props.sendComment(this.props.id, this.props.comment, this.props.replyId)}}
                        />
           </Item>
        </View>
        </View>
    )}
}
const mapStateToProps = state => {
    return({
        isReplay : state.homeApp.commentAddReducer.replyBool,
        replyCmUserName : state.homeApp.commentAddReducer.replyUserName,
        comment : state.homeApp.commentAddReducer.comment,
        replyId : state.homeApp.commentAddReducer.replyCmId,
        loading : state.homeApp.commentAddReducer.loading,
        commenting : state.homeApp.commentAddReducer.commenting,
    });
}

const mapDispatchToProps = dispatch => {
    return({
       deleteReply : () => dispatch(deleteReply()),
       changeComment : (comment) => dispatch(changeComment(comment)),
       sendComment : (postId, comment, reply) => dispatch(commentRequestAction(postId,  comment, reply)),
       stopCommenting : () => dispatch(stopCommenting()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);