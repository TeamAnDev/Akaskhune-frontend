import React from 'react';
import {View, Dimensions, ImageBackground, Text} from 'react-native';
import { CardItem, Right, Body, Left } from 'native-base';
import colors from '../../config/colors';
const heightOfBar = Dimensions.get("window").height * 60/640;
const widthOfImage = Dimensions.get('window').width * 28/360;
const marginOfAvatar = Dimensions.get('window').width * 17/360;
const PostLikeOrCommentNotif = ({userName, time, status}) => (
    <View 
    style={{height : heightOfBar,
     flexDirection : 'row',
      backgroundColor :'white',
       alignItems:'center',
        borderBottomWidth:1,
         borderBottomColor : colors.grey}}>
        <View style={{flex:11, marginRight : widthOfImage/2}}>
                 <Text style = {{width : '100%', textAlign : 'right', color : 'black'}}> 
                {status === 'like' ? userName + " این عکس رو پسندید " : userName + " نظر ثبت کرده "}
                </Text>
                <Text style = {{width : '100%', textAlign : 'right'}}>{time}</Text>
        </View>
        <View style={{flex:1, marginRight : marginOfAvatar}}>
            <ImageBackground
                style = {{backgroundColor : colors.blackGrey,
                        borderRadius : 5, 
                        width : widthOfImage,
                        height : widthOfImage,}}
                imageStyle = {{borderRadius : 5}}>
                
            </ImageBackground>
        </View>
           
    </View>
)
export default PostLikeOrCommentNotif;