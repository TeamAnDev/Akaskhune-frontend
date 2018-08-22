import React from 'react';
import {Component} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';


class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {name:"", followers:0, following:0, bio:"", img:""};
    }

    componentDidMount() {
        axios.get('http://192.168.43.116:8080/users/1')
        .then(response => {
            this.setState({name : response.data.name,
                 followers : response.data.followers,
                 following : response.data.following,
                 bio : response.data.bio,
                 img : response.data.img});
        })
        .catch(err => console.warn(err));
    }

    render() {
        return (
            <View style={{flex : 1, flexDirection: 'row-reverse', justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                    <Image source={require('../../../pic.jpg')} style={{width:100, height:100, borderRadius:50}}/>
                </View>
                <View style={{flex:2, flexDirection:'column', marginRight:20}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>{this.state.name}</Text>
                    <Text>{this.state.followers}{" دنبال کننده"}{"     "}{this.state.following}{"دنبال شونده"}</Text>
                    <Text style={{fontWeight:'bold'}}>{this.state.bio}</Text>
                </View>
            </View>
        )
    }
}

export default ProfileInfo;