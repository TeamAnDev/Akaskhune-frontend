import React from 'react';
import {View, Dimensions, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { CardItem, Right, Body, Left } from 'native-base';
import {push} from '../../../NavigationService';
import colors from '../../config/colors';
const heightOfBar = Dimensions.get("window").height * 60/640;
const widthOfImage = Dimensions.get('window').width * 28/360;
const marginOfAvatar = Dimensions.get('window').width * 17/360;
const PostLikeOrCommentNotif = ({userName, time, status, photoUrl, commentText, postId}) => (
    <TouchableOpacity onPress = {()=>push('SinglePost', {id : postId})}>
    <View 
    style={{height : heightOfBar,
     flexDirection : 'row',
      backgroundColor :'white',
       alignItems:'center',
        borderBottomWidth:1,
         borderBottomColor : colors.grey}}>
        <View style={{flex:11, marginRight : widthOfImage/2}}>
                <View style={{flexDirection : 'row', width : '100%', justifyContent:'flex-end'}}>
                    {status === 'comment' ? <Text style = {{ textAlign : 'right', color : 'black'}}> 
                        ({commentText})
                    </Text> : null}
                    <Text style = {{ textAlign : 'right', color : 'black'}}> 
                    {status === 'like' ?  " این عکس رو پسندید " :  " نظر ثبت کرده "}
                    </Text>
                    <Text style = {{textAlign : 'right', color : 'black'}}>{userName}</Text>
                </View>
                 
                <Text style = {{width : '100%', textAlign : 'right'}}>{time}</Text>
        </View>
        <View style={{flex:1, marginRight : marginOfAvatar}}>
            <ImageBackground
                style = {{backgroundColor : colors.blackGrey,
                        borderRadius : 5, 
                        width : widthOfImage,
                        height : widthOfImage,}}
                imageStyle = {{borderRadius : 5}}
                source={{uri : photoUrl}}>
                
            </ImageBackground>
        </View>
           
    </View></TouchableOpacity>
)
export default PostLikeOrCommentNotif;