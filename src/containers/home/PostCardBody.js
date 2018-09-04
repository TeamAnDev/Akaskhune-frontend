import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
const widthOfCardImage = Dimensions.get('window').width * 320/360;
const heightOfCardImage = widthOfCardImage * 150/326
const heightOfBody = Dimensions.get('window').height * 60/640;
const CardBody = (props) => {
    return (
    <View>
    <CardItem style={{backgroundColor:'red'}} cardBody>
        <ImageBackground source={{uri : props.sourceImage}}
                    style={{backgroundColor:colors.grey, width:"100%"
                        // width:widthOfCardImage
                        , height:heightOfCardImage,
                       }}>
        </ImageBackground>
    </CardItem>
    {props.caption === "" ? null : 
    <CardItem cardBody style={{height:heightOfBody}} bordered>
    <View style={{textAlign:'right', direction:"rtl", flex:1, margin: 8 }}>
        <Text style={{fontSize : 12, color:colors.fontColor, textAlign:'right', direction:'rtl'}}>
            {props.caption}
        </Text>
    </View>
    </CardItem>}
    </View>

)}

export default CardBody;