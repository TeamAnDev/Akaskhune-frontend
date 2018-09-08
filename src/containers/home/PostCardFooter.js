import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import {startCommenting} from '../../actions/home/comments';
import {navigate} from '../../../NavigationService';
// import FHIcon from '../../components/FHIcon';
class CardFooter extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
    return (
        <CardItem bordered style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}>
            <Left>
                <TouchableOpacity onPress={() => this.props.likeCallback()}>
                    <Icon name='heart-o' type='FontAwesome' style={{color:colors.fontColor, fontSize: 25,}} />
                    {/* user heart for liked */}
                </TouchableOpacity>
                <Text style={{padding:6}}>{this.props.numberOfLikes}</Text>

                {!this.props.singlePost ? <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => { this.props.startCommenting();navigate('SinglePost', {id :this.props.id});}} style={{marginLeft:4}}>
                    <Icon name='comment' type="Octicons" style={{color:colors.fontColor, fontSize: 27,paddingTop: 3,}} />
                </TouchableOpacity>
                <Text style={{padding:6}}>{this.props.numberOfComments}</Text>
                </View> : 
                <View style={{flexDirection:'row'}}>
                    <Icon name='comment' type="Octicons" style={{color:colors.fontColor, fontSize: 27,paddingTop: 3,}} />
                    <Text style={{padding:6}}>{this.props.numberOfComments}</Text>
                </View>}

                <TouchableOpacity onPress={() => this.props.shareCallback()} style={{marginLeft:10}}>
                    <Icon name='share-2' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
                </TouchableOpacity> 
            </Left>
            <Right>
                <TouchableOpacity onPress={() => this.props.bookmarkCallback()} style={{marginLeft:10}}>
                    <Icon name='bookmark' type="Feather" style={{color:colors.fontColor, fontSize: 25,paddingTop: 3,}} />
                </TouchableOpacity>
            </Right>
        </CardItem>
        
    
)}
}

const mapDispatchToProps = dispatch => {
    return({
      startCommenting : () => dispatch(startCommenting())
    });
}

export default connect(null, mapDispatchToProps)(CardFooter);