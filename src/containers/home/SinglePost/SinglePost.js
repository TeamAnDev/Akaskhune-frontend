import React, { Component } from 'react';
import {View} from 'react-native';
import SinglePostHeader from './Header';
import { Card } from 'native-base';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from '../PostCardFooter';
import CommentList from './CommentList';
import {connect} from 'react-redux';

import {singlePostRequest} from '../../../actions/home/singlePostRequest';
class SinglePost extends Component
{
    constructor(props)
    {
        super(props);
        this.props.singlePostRequest(this.props.navigation.getParam('id'));
    }
    render()
    {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <SinglePostHeader/>

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
                        id = {this.props.post.user_id}/>
                    
                    {/* <CommentList/> */}

                    
                </Card>
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
      
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);