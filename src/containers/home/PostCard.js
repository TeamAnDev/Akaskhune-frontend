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
        <View style={{margin: marginOfCard}}>
            <Card  style={{ borderRadius: 8 }}>
                <CardHeader
                 location="ماسال" 
                 name="رحمان پورسرخ" 
                 time="۳ ساعت پیش" 
                 moreCallback={()=>{}}/>

                <CardBody
                caption="عکاسی طبیعت در شمال"
                sourceImage=""/>

                <CardFooter
                likeCallback={()=>{}}
                numberOfLikes="۲۰۰"
                commentCallback={()=>{}}
                numberOfComments="۵"
                shareCallback={()=>{}}
                bookmarkCallback={()=>{}}
                 />
            </Card>
        </View>);
    }
}