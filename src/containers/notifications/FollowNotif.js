import React from 'react';
import {View, Dimensions, ImageBackground, Text} from 'react-native';
import { CardItem, Right, Body, Left } from 'native-base';
import colors from '../../config/colors';
import FHFollowButton from '../../components/FHFollowButton';
const heightOfBar = Dimensions.get("window").height * 60/640;
const widthOfImage = Dimensions.get('window').width * 28/360;
const marginOfAvatar = Dimensions.get('window').width * 17/360;

const FollowNotif = ({name, time, following, username}) => (
    <View 
    style={{height : heightOfBar, 
    flexDirection : 'row', 
    backgroundColor :'white', 
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor : colors.grey}}>
        <View style={{flex:3, marginLeft : marginOfAvatar}}>
            <FHFollowButton following = {following} username = {username}/>
        </View>
        <View style={{flex:8, marginRight : widthOfImage/2}}>
                 <Text style = {{width : '100%', textAlign : 'right', color : 'black'}}> 
                {name + " شما را دنبال کرد " }
                </Text>
                <Text style = {{width : '100%', textAlign : 'right'}}>{time}</Text>
        </View>
        <View style={{flex:1, marginRight : marginOfAvatar}}>
            <ImageBackground
                style = {{backgroundColor : colors.blackGrey,
                        borderRadius : widthOfImage/2, 
                        width : widthOfImage,
                        height : widthOfImage,
                        }}
                imageStyle = {{borderRadius : 5}}>
                
            </ImageBackground>
        </View>
        
    </View>
)
export default FollowNotif;