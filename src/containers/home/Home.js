import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import HomeHeader from './Header';
export default class Home extends Component{

    render()
    {
        return(
            <View>
                <HomeHeader/>
            </View>
        )
    }
}