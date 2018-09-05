import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../../config/colors';
const heightOfCardImage = Dimensions.get('window').height * 250 / 640;
const heightOfBody = Dimensions.get('window').height * 64/640;
const PostBody = (props) => {
    return (
    <View>
    <CardItem cardBody>
        <ImageBackground source={{uri : props.sourceImage}}
                    style={{backgroundColor:colors.grey, width:"100%"
                        , height:heightOfCardImage,
                       }}>
        </ImageBackground>
    </CardItem>
    {props.caption === ""  || props.caption === undefined ? null : 
    <CardItem cardBody style={{height:heightOfBody}} bordered>
    <View style={{textAlign:'right', direction:"rtl", flex:1, margin: 8}}>
        <Text style={{fontSize : 12, color:colors.fontColor, textAlign:'right'}}>
            {props.caption}
        </Text>
    </View>
    </CardItem>}
    </View>

)}

export default PostBody;