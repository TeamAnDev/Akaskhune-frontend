import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity
        , FlatList} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../../config/colors';


const Comment = (props) => {
    let widthOfAvatar = Dimensions.get('window').width * 30 / 360;
    widthOfAvatar = props.isReplay ? widthOfAvatar *3/4 : widthOfAvatar;
    return(
    <CardItem bordered>
      <Left>
          {!props.isReplay ? 
             <TouchableOpacity>
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
comments = [
    {
        name : 'فرزاد',
        time : '۳ ساعت پیش',
        text : 'به به چه عکسی',
        id : 3,
        avatar_url : '',
        replies : [
             {
                name : 'فرزاد',
                time : '۳ ساعت پیش',
                text : 'به به چه عکسی',
                id : 3,
                avatar_url : '',
             },
             {
                name : 'فرزاد',
                time : '۳ ساعت پیش',
                text : 'به به چه عکسی',
                id : 3,
                avatar_url : '',
             }
       
        ]

    },
    {
        name : 'فرزاد',
        time : '۳ ساعت پیش',
        text : 'به به چه عکسی',
        id : 3,
        avatar_url : '',
        replies : [
             {
                name : 'فرزاد',
                time : '۳ ساعت پیش',
                text : 'به به چه عکسی',
                id : 3,
                avatar_url : '',
             },
             {
                name : 'فرزاد',
                time : '۳ ساعت پیش',
                text : 'به به چه عکسی',
                id : 3,
                avatar_url : '',
             }
       
        ]

    }
];
const CommentList = (props) => {
    return (
            <FlatList
            onEndReached = {()=>{}}
            style = {{backgroundColor: 'white'}}
            data = {comments}
            renderItem = {({item}) =>
            { let comment = item;
            return <View>
                        <Comment
                        name = {comment.name}
                        time = {comment.time}
                        text = {comment.text}
                        profilePhotoUrl = {comment.avatar_url}
                        id = {comment.id}
                        isReplay = {false}/>
                        <FlatList
                        onEndReached = {() => {}}
                        style = {{backgroundColor: 'white'}}
                        data = {comment.replies}
                        renderItem = {({item}) => 
                            <Comment
                            name = {item.name}
                            time = {item.time}
                            text = {item.text}
                            profilePhotoUrl = {item.text}
                            id = {item.id}
                            isReplay = {true}/>}
                        />
                    </View>}
                }/>
        
)}

export default CommentList;