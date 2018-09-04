import React from 'react';
import {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import {requestInfo} from '../../actions/profile/profileRequest';
import {connect} from 'react-redux';
import colors from '../../config/colors';

class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.props.requestInfo();
    }
    render() {
        return (
            <View style={{flex : 1, flexDirection: 'row-reverse', justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                    <ImageBackground imageStyle={{width:100, height:100, borderRadius:50}} source={{uri:this.props.avatar}} style={{backgroundColor:'white',width:100, height:100, borderRadius:50}}/>
                </View>
                <View style={{flex:2, flexDirection:'column', marginRight:20, marginTop:5}}>
                    <Text style={{fontWeight:'bold', fontSize:20,textAlign:'right'}}>{this.props.fullname}</Text>
                    <Text style={{marginTop:5,textAlign:'right'}}>{this.props.follower_count}{" دنبال کننده"}{"     "}{this.props.following_count}{" دنبال شونده"}</Text>
                    <Text style={{fontSize:12 ,fontWeight:'bold', textAlign:'right', marginTop:5}}>{this.props.bio}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        fullname : state.profileApp.infoRequestReducer.fullname,
        bio : state.profileApp.infoRequestReducer.bio,
        follower_count : state.profileApp.infoRequestReducer.follower_count,
        following_count : state.profileApp.infoRequestReducer.following_count,
        avatar : state.profileApp.infoRequestReducer.avatar
    });
}

const mapDispatchToProps = dispatch => {
    return({
        requestInfo : () => dispatch(requestInfo())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);