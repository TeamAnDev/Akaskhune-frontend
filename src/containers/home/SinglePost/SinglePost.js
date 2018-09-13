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
        let index = props.navigation.getParam('index');
        this.postId = this.props.navigation.getParam('id');
        this.state ={
            postId : this.postId, 
            index
        }
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
        const post = Object.assign({}, this.props.post[this.postId]);
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <SinglePostHeader
                     name = {post.name}
                     postId = {post.id}
                     username = {post.username}
                     isOwner = {post.is_owner}/>
                <ScrollView style={{flex:1, backgroundColor:'white'}}
                    refreshControl ={<RefreshControl
                                        colors={[colors.accentColor]}
                                        tintColor={colors.accentColor} 
                                        refreshing={this.props.loading} 
                                        onRefresh={this.refresh}
                                    />}>
                <Card transparent>
                    <PostHeader
                        location = {post.location}
                        name = {post.user_fullname}
                        profilePhotoUrl = {post.avatar_url}
                        time = {post.created_at}
                        username = {post.username}
                        id = {this.state.postId}/>
                    <PostBody
                        caption = {post.caption}
                        sourceImage = {post.photo_url}
                        id = {post.user_id}/>
                    <PostFooter
                        numberOfLikes={post.likes_count}
                        numberOfComments={post.comments_count}
                        userId = {post.user_id}
                        id = {this.state.postId}
                        singlePost = {true}
                        is_liked = {post.is_liked}
                       />                
                </Card>
                <CommentList id = {this.state.postId}/>
                </ScrollView>
                <CommentInput id= {this.state.postId} index = {this.state.index}/>
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