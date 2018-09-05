import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../../config/colors';

const widthOfAvatar = Dimensions.get('window').width * 25/350;
const heightOfHeader = Dimensions.get('window').height * 59/640;

const CommentList = (props) => {
    return (
    <CardItem bordered style={{height:heightOfHeader}}>
    <Body style={{justifyContent:'center', alignItems:"center"}}>
            {location}
    </Body>
    <Right>
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
    </Right>
    </CardItem>

)}

export default CommentList;