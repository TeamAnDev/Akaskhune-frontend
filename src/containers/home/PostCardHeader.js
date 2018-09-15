import React, { Component } from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
import ThreeDot from './ThreeDot';
import {connect} from 'react-redux';
import {navigateToProfile} from '../../../NavigationService';

const widthOfAvatar = Dimensions.get('window').width * 25/350;
const widthOfName = Dimensions.get('window').width * 80/100;
const heightOfHeader = Dimensions.get('window').height * 45/640;
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
        <Right >
            <View style = {{width : widthOfName, alignItems : 'flex-end'}}>
            <TouchableOpacity onPress = {()=>{navigateToProfile(props.username, props.ownUsername)}}>
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
            </View>
        </Right>
    </CardItem>

)}
const mapStateToProps = state => {
    return({
        ownUsername : state.userInfoApp.getSelfInfoReducer.data.username,
    })
}

export default connect(mapStateToProps, null)(CardHeader);