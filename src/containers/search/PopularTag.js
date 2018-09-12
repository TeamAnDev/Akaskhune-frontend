import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import {tagName} from '../../actions/tagPosts/tagPostsRequest';
import {connect} from 'react-redux';
import {navigate} from '../../../NavigationService';


const PopularTag = (props) => {
    return(
        <TouchableOpacity onPress={() => {props.sendTagName(props.tagName);navigate("TagPosts")}} style={{margin:5}}>
            <ImageBackground style={{backgroundColor:'#EFEFEF', width:props.width, height:props.height, justifyContent:'center'}}>
                <View style={{alignSelf:'center'}}><Text>{"#" + props.tagName}</Text></View>
            </ImageBackground>
        </TouchableOpacity>
        
    )
    
}

const mapDispatchToProps = dispatch => {
    return({
        sendTagName : name => dispatch(tagName(name))
    })
}

export default connect(null, mapDispatchToProps)(PopularTag);