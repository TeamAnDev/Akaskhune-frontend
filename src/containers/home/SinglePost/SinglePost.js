import React, { Component } from 'react';
import {View} from 'react-native';
import SinglePostHeader from './Header';
import { Card } from 'native-base';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from '../PostCardFooter';
import CommentList from './CommentList';
export default class SinglePost extends Component
{
    render()
    {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <SinglePostHeader/>

                <Card transparent>
                    <PostHeader
                        location = "ماسال"
                        name = "فرزاد حبیبی"
                        profilePhotourl = ""
                        time = "۳ ساعت پیش"
                        id = ""/>
                    <PostBody
                        caption = "من در ماسال"
                        sourceImgae = ""
                        id = ""/>
                    <PostFooter
                        likeCallback={()=>{}}
                        numberOfLikes="200"
                        commentCallback={()=>{}}
                        numberOfComments="30"
                        shareCallback={()=>{}}
                        bookmarkCallback={()=>{}}
                        id="" />
                    
                    {/* <CommentList/> */}

                    
                </Card>
            </View>
        )
    }
}