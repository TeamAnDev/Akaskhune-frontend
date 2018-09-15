import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import {tagName} from '../../actions/tagPosts/tagPostsRequest';
import {connect} from 'react-redux';
import {navigate} from '../../../NavigationService';


const PopularTag = (props) => {
    let toReturn;
    if(props.tagName) {
        toReturn = <TouchableOpacity onPress={() => {props.sendTagName(props.tagName);navigate("TagPosts")}} style={{margin:5, borderRadius:5}}>
                        <ImageBackground style={{backgroundColor:'#EFEFEF', width:props.width, height:props.height,
                             justifyContent:'center', borderRadius:5}} source={{uri : props.photo_url}} imageStyle={{borderRadius:5}}>
                            <View style={{alignSelf:'center'}}><Text>{"#" + props.tagName}</Text></View>
                        </ImageBackground>
                    </TouchableOpacity>
    } else {
        toReturn = <TouchableOpacity style={{margin:5}}>
                        <ImageBackground style={{backgroundColor:'#EFEFEF', width:props.width, height:props.height, justifyContent:'center', borderRadius:5}}>
                            <View style={{alignSelf:'center'}}><Text>{"بدون تگ"}</Text></View>
                        </ImageBackground>
                    </TouchableOpacity>
    }
    return(
        toReturn
    )
    
}

const mapDispatchToProps = dispatch => {
    return({
        sendTagName : name => dispatch(tagName(name))
    })
}

export default connect(null, mapDispatchToProps)(PopularTag);