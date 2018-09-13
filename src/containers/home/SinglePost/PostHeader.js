import React from 'react';
import {View, Dimensions, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { CardItem, Body, Right, Icon} from 'native-base';
import colors from '../../../config/colors';
import {push} from '../../../../NavigationService';
const widthOfAvatar = Dimensions.get('window').width * 25/350;
const heightOfHeader = Dimensions.get('window').height * 59/640;

const PostHeader = (props) => {
    const location = props.location ? 
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:12,direction:'rtl'}}>
            {props.location}
        </Text>
        <Icon style={{fontSize:20}} name="location" type="EvilIcons"/> 
     </View> : (<View></View>);  

    return (
    <CardItem bordered style={{height:heightOfHeader}}>
        <Body style={{justifyContent:'center', alignItems:"center"}}>
            {location}
        </Body>
        <TouchableOpacity onPress = {()=> push('UserProfile', {username : props.username})} >
        <Right>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text 
                    style={{
                    fontSize:12, 
                    color:colors.black, 
                    marginRight :5,
                    textAlign:'right'}}>
                        {props.name}
                    </Text>
                    <Text 
                    style={{
                    fontSize:12, 
                    color:colors.blackGrey, 
                    marginRight :5,
                    textAlign:'right'}}>
                    {props.time}
                    </Text>
                </View>
                <View>
                    <ImageBackground 
                    source={{uri :  props.profilePhotoUrl}}
                    style={{
                        backgroundColor:colors.blackGrey, 
                        width:widthOfAvatar, 
                        height:widthOfAvatar,
                        borderRadius:widthOfAvatar/2, 
                        margin:4}}
                    imageStyle={{borderRadius:widthOfAvatar/2}}>


                    </ImageBackground>
                </View>
            </View>
        </Right>
        </TouchableOpacity>
    </CardItem>
)}

export default PostHeader;