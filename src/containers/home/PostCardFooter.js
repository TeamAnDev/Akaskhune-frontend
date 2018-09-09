import React, { Component } from 'react';
import {View, Text, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import {startCommenting} from '../../actions/home/comments';
import {navigate} from '../../../NavigationService';
import {likeRequestAction} from '../../actions/home/like';
// import FHIcon from '../../components/FHIcon';
class CardFooter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
        if(props.is_liked)
        {
            this.state.liked = true;
        }
        else{
            this.state.liked = false;
        }
        this.likeAndUnlikePost = this.likeAndUnlikePost.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.is_liked !== this.props.is_liked)
        {
            this.setState({liked : nextProps.is_liked})
        }
    }
    likeAndUnlikePost()
    {
        if(!this.state.liked)
        {
            this.props.like(this.props.id, true); 
            this.setState({liked : true})
        } else
        {
            this.props.like(this.props.id, false)
            this.setState({liked : false})
        }
        
    }
    render()
    {
    return (
        <CardItem bordered style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}>
            <Left>
                <TouchableOpacity onPress={this.likeAndUnlikePost}>
                    <Icon name={this.state.liked ? 'heart' : 'heart-o'} 
                    type='FontAwesome' style={{color: !this.state.liked ? colors.fontColor : colors.accentColor, fontSize: 25,}} />
                </TouchableOpacity>
                <Text style={{padding:6}}>
                    {(this.props.numberOfLikes || this.state.liked)?( this.props.numberOfLikes + (this.props.is_liked ? this.state.liked ? 0 : -1 : this.state.liked ? +1 : 0) ): null}
                </Text>

                {!this.props.singlePost ? <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => { this.props.startCommenting();navigate('SinglePost', {id :this.props.id, index : this.props.index});}} style={{marginLeft:4}}>
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
      startCommenting : () => dispatch(startCommenting()),
      like : (postId, isLiking) => dispatch(likeRequestAction(postId, isLiking))
    });
}

export default connect(null, mapDispatchToProps)(CardFooter);