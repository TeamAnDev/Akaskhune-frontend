import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import LoginInputs from './LoginInputs';
import Details from './Details';
import LoginFooter from './LoginFooter';

export default class Login extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
                <View style={{flex:1}}>
                    <View style={{flex:3}}>
                        <Details/>
                    </View>
                    <View style={{flex:4}}>
                        <LoginInputs/>
                    </View>
                    
                    <View style={{flex:2}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2}}><LoginFooter/></View>
                        
                    </View>
                </View>
        )
    }
}