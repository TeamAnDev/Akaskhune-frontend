import React from 'react';
import {View, Dimensions, ImageBackground, Text, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import FHFollowButton from '../../components/FHFollowButton';
import {push} from '../../../NavigationService';
const heightOfBar = Dimensions.get("window").height * 60/640;
const widthOfImage = Dimensions.get('window').width * 28/360;
const marginOfAvatar = Dimensions.get('window').width * 17/360;

const FollowNotif = ({name, time, following, username}) => (
    <TouchableOpacity onPress = {()=>{push('UserProfile', {username : username})}}>
    <View 
    style={{height : heightOfBar, 
    flexDirection : 'row', 
    backgroundColor :'white', 
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor : colors.grey}}>
        <View style={{flex:4, marginLeft : marginOfAvatar}}>
            <FHFollowButton following = {following} username = {username} />
        </View>
        <View style={{flex:7, marginRight : widthOfImage/2}}>
          
            <View>
                 <Text style = {{width : '100%', textAlign : 'right', color : 'black'}}> 
                {name + " شما را دنبال کرد " }
                </Text>
                <Text style = {{width : '100%', textAlign : 'right'}}>{time}</Text>
            </View>
           
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
    </TouchableOpacity>
)
export default FollowNotif;