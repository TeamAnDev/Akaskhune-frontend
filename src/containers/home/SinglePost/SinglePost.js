import React, { Component } from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import SinglePostHeader from './Header';
import { Card } from 'native-base';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from '../PostCardFooter';
import CommentList from './CommentList';
import {connect} from 'react-redux';
import {commentListInitial, commentListRequest} from '../../../actions/home/comentsRequest';
import {singlePostRequest} from '../../../actions/home/singlePostRequest';
import CommentInput from './CommentInput';
import colors from '../../../config/colors';
import { rest } from '../../../config/urls';

class SinglePost extends Component
{
    constructor(props)
    {
        super(props);
        this.props.singlePostRequest(this.props.navigation.getParam('id'));
        this.refresh = this.refresh.bind(this);
    }
    refresh()
    {
        this.props.singlePostRequest(this.props.navigation.getParam('id'))
        this.props.commentListInitial(this.props.navigation.getParam('id'));
        this.props.commentListRequest(rest.commentList(this.props.navigation.getParam('id')));
    }
    render()
    {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <SinglePostHeader/>
                <ScrollView style={{flex:1, backgroundColor:'white'}}
                    refreshControl ={<RefreshControl
                                        colors={[colors.accentColor]}
                                        tintColor={colors.accentColor} 
                                        refreshing={this.props.loading} 
                                        onRefresh={this.refresh}
                                    />}>
                <Card transparent>
                    <PostHeader
                        location = {this.props.post.location}
                        name = {this.props.post.user_fullname}
                        profilePhotoUrl = {this.props.post.avatar_url}
                        time = {this.props.post.created_at}
                        id = {this.props.post.user_id}/>
                    <PostBody
                        caption = {this.props.post.caption}
                        sourceImage = {this.props.post.photo_url}
                        id = {this.props.post.user_id}/>
                    <PostFooter
                        likeCallback={()=>{}}
                        numberOfLikes={this.props.post.likes_count}
                        commentCallback={()=>{}}
                        numberOfComments={this.props.post.comments_count}
                        shareCallback={()=>{}}
                        bookmarkCallback={()=>{}}
                        id = {this.props.post.user_id}
                        singlePost = {true}/>                
                </Card>
                <CommentList id = {this.props.navigation.getParam('id')}/>
                </ScrollView>
                <CommentInput/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        post : state.homeApp.singlePostReducer.post,
        loading : state.homeApp.singlePostReducer.loading,
    });
}

const mapDispatchToProps = dispatch => {
    return({
        singlePostRequest : (id) => dispatch(singlePostRequest(id)),
        commentListRequest : (url) => dispatch(commentListRequest(url)),
        commentListInitial : (postId) => dispatch(commentListInitial(postId)),
      
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);