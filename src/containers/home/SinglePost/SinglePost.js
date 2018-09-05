import React, { Component } from 'react';
import {View} from 'react-native';
import SinglePostHeader from './Header';
export default class SinglePost extends Component
{
    render()
    {
        return(
            <View style={{flex:1}}>
                <SinglePostHeader/>
                
            </View>
        )
    }
}