import React, { Component } from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';

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
            <TouchableOpacity onPress={()=>props.moreCallback()}>
                <Icon name="more-horizontal" type="Feather" style={{color:colors.fontColor, fontSize:20}}/>
            </TouchableOpacity>
        </Left>
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
                    <ImageBackground 
                    style={{backgroundColor:colors.blackGrey, width:widthOfAvatar, height:widthOfAvatar
                        ,borderRadius:widthOfAvatar/2, margin:4}}>

                    </ImageBackground>
                </View>
            </View>
        </Right>
    </CardItem>

)}

export default CardHeader;