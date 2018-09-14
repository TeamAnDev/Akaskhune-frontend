import React from 'react';
import {Component} from 'react';
import {View, Text,ImageBackground} from 'react-native';
import {push} from '../../../NavigationService';
import FHFollowButton from '../../components/FHFollowButton';
export default class ProfileInfo extends Component {

    render() {
        console.warn("status",this.props);
        return (
            <View style={{flex : 1, flexDirection: 'row-reverse', justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                    <ImageBackground imageStyle={{width:100, height:100, borderRadius:50}} source={{uri:this.props.avatar}} style={{backgroundColor:'white',width:100, height:100, borderRadius:50}}/>
                </View>
                <View 
                style={{flex:2, flexDirection:'column', marginRight:20, marginTop:5}}>
                    <Text style={{fontWeight:'bold', fontSize:20,textAlign:'right'}}>{this.props.fullname}</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <Text 
                        style={{textAlign:'right', marginRight:10}} 
                        onPress={() => !this.props.is_private || this.props.status === 'followed'? 
                            push("FollowingsList", {username : this.props.username}) : null}>

                            {this.props.following_count}{" دنبال شونده"}
                
                        </Text>
                        <Text 
                        style={{textAlign:'right'}} 
                        onPress={() => !this.props.is_private || this.props.status === 'followed' ? 
                                push("FollowersList",{username : this.props.username}) : null}>

                                {this.props.follower_count}{" دنبال کننده"}

                        </Text>
                    </View>
                    <Text style = {{fontSize:12 ,fontWeight:'bold', textAlign:'right', marginTop:5}}>{this.props.bio}</Text>
                    { this.props.isOthers && this.props.status? 
                    <View style = {{width:'100%'}}>
                        <FHFollowButton 
                        isPrivate={this.props.is_private} 
                        following={this.props.status} 
                        username={this.props.username}
                        style={{alignSelf: 'flex-end', margin: 5,}}/>
                    </View>
                     : null}
                </View>
            </View>
        )
    }
}
