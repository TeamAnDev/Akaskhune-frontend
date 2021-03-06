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
        <View style={{margin: marginOfCard, marginTop:marginOfCard/2, marginBottom:marginOfCard/2}}>
            <Card  style={{ borderRadius: 8 }}>
                <CardHeader
                 location={this.props.location}
                 name={this.props.fullName}
                 time={this.props.time} 
                 isOwner={this.props.isOwner}
                 profilePhotoUrl={this.props.profilePhotoUrl}
                 id={this.props.id}
                 username={this.props.username}/>
                
                <CardBody
                caption={this.props.caption}
                sourceImage={this.props.photoUrl}
                id={this.props.id}
                index={this.props.index}/>

                <CardFooter
                toggleShareVisible = {this.props.toggleShareVisible}
                numberOfLikes={this.props.likesCount}
                numberOfComments={this.props.commentsCount}
                id={this.props.id} 
                index={this.props.index}
                is_liked = {this.props.is_liked}/>
            </Card>
        </View>);
    }
}