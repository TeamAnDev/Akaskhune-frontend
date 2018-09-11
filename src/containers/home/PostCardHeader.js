import React, { Component } from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
import ThreeDot from './ThreeDot';
import {navigate} from '../../../NavigationService';

const widthOfAvatar = Dimensions.get('window').width * 25/350;
const heightOfHeader = Dimensions.get('window').height * 40/640;
const CardHeader = (props) => {
    const location = props.location ? 
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:12,direction:'rtl'}}>{props.location}</Text>
        <Icon style={{fontSize:20}} name="location" type="EvilIcons"/> 
     </View> : (<View></View>);  
    return (
    <CardItem bordered style={{height:heightOfHeader, borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
        <Left>
           {!props.isOwner ? <ThreeDot
            name = {props.name}
            postId = {props.id}
            username = {props.username}/> : null}
        </Left>
        <Body style={{justifyContent:'center', alignItems:"center"}}>
               {location}
        </Body>
        <Right>
            
            <TouchableOpacity onPress = {()=>{!props.isOwner ? navigate('UserProfile', {username : props.username}) : null}}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={{fontSize:12, color:colors.black, marginRight :5,
                        textAlign:'right', direction:'rtl'}}>{props.name}</Text>
                    <Text style={{fontSize:12, color:colors.blackGrey, marginRight :5,
                         textAlign:'right', direction:'rtl'}}>{props.time}</Text>
                </View>
                <View>
                    <ImageBackground source={{uri : props.profilePhotoUrl}}
                    style={{backgroundColor:colors.blackGrey, width:widthOfAvatar, height:widthOfAvatar
                        ,borderRadius:widthOfAvatar/2, margin:4}}
                    imageStyle={{borderRadius:widthOfAvatar/2}}>

                    </ImageBackground>
                </View>
            </View>
            </TouchableOpacity>
        </Right>
    </CardItem>

)}

export default CardHeader;