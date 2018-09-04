import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import HomeHeader from './Header';
import PostCard from './PostCard';

const feeds = [{
    fullName : "فرزاد حبیبی",

}]
export default class Home extends Component{

    render()
    {
        return(
            <View style={{flex:1}}>
                <HomeHeader/>
                <View style={{flex:1, backgroundColor:'white'}}>
                    <PostCard/>
                </View>
            </View>
        )
    }
}