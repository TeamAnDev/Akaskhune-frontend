import React, { Component } from 'react'
import {View, SectionList, Text} from 'react-native';
import NotificationsHeader from './NotificationsHeader';
import PostLikeOrCommentNotif from './PostLikeOrCommentNotif';
import FollowNotif from './FollowNotif';
const data ={
  today : [
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },{
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
  ],
  yesterday :  [
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },{
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
  ],
  last_days :  [
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },{
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
  ],

}


export default class Notification extends Component {
 
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <NotificationsHeader/>
        <View style={{flex:1}}>
        <SectionList
        renderItem={({item, index, section}) =>{
          switch(item.type)
          {
            case('like' || 'comment'):
              return <PostLikeOrCommentNotif
                    userName = {item.fullname}
                    time = {item.time}
                    status = {item.type}
                    postId = {item.post_id}
                    photoUrl = {item.photo_url}
                    commentText = {item.comment_text}/>
            case('follow'):
              return <FollowNotif
                    name = {item.fullname}
                    time = {item.time}
                    userId = {item.user_id}
                    username = {item.username}
                    following = {item.is_followed}
                    avatarUrl = {item.avatar_url}/>
            default : 
              return <View/>
          }
          
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: "امروز", data: data.today},
          {title: 'دیروز', data: data.yesterday},
          {title: 'روز‌های قبل', data: data.last_days},
        ]}
        keyExtractor={(item, index) => item + index}
      />
        
          

        </View>
      </View>
    )
  }
}
