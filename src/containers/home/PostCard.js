import React, { Component } from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
import CardHeader from './PostCardHeader';
import CardBody from './PostCardBody';
import CardFooter from './PostCardFooter';
const marginOfCard = Dimensions.get('window').width * 20/360;

export default class PostCard extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
        <View style={{margin: marginOfCard, marginBottom:0}}>
            <Card  style={{ borderRadius: 8 }}>
                <CardHeader
                 location={this.props.location}
                 name={this.props.fullName}
                 time={this.props.time} 
                 moreCallback={()=>{}}/>

                <CardBody
                caption={this.props.caption}
                sourceImage={this.props.photoUrl}/>

                <CardFooter
                likeCallback={()=>{}}
                numberOfLikes={this.props.likesCount}
                commentCallback={()=>{}}
                numberOfComments={this.props.commentsCount}
                shareCallback={()=>{}}
                bookmarkCallback={()=>{}}
                 />
            </Card>
        </View>);
    }
}