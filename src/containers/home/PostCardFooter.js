import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
// import FHIcon from '../../components/FHIcon';
const CardFooter = (props) => {
    return (
        <CardItem bordered styl={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
            <Left>
                <TouchableOpacity onPress={() => props.likeCallback()}>
                    <Icon name='heart-o' type='FontAwesome' style={{color:colors.fontColor, fontSize: 25,}} />
                    {/* user heart for liked */}
                </TouchableOpacity>
                <Text style={{padding:6}}>{props.numberOfLikes}</Text>
                {!props.singlePost ? <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => props.commentCallback()} style={{marginLeft:4}}>
                    <Icon name='comment' type="Octicons" style={{color:colors.fontColor, fontSize: 27,paddingTop: 3,}} />
                </TouchableOpacity>
                <Text style={{padding:6}}>{props.numberOfComments}</Text>
                </View> : null}
                <TouchableOpacity onPress={() => props.shareCallback()} style={{marginLeft:10}}>
                    <Icon name='share-2' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
                </TouchableOpacity> 
            </Left>
            <Right>
                <TouchableOpacity onPress={() => props.bookmarkCallback()} style={{marginLeft:10}}>
                    <Icon name='bookmark' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
                </TouchableOpacity>
            </Right>
        </CardItem>
    
)}

export default CardFooter;