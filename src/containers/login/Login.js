import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import LoginInputs from './LoginInputs';
import Details from './Details';
import LoginFooter from './LoginFooter';
import {getTheme} from 'react-native-material-kit';
import colors from '../../config/colors';

export default class Login extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        const theme = getTheme();
        console.warn(theme);
        
        return(
            <View style={{flex:1 , backgroundColor:colors.grey}}>
                <View style={{flex:3}}>
                    <View style={{flex:1}}>
                    </View>
                    <View style={{flex:2}}>
                        <Details/>
                    </View>
                   
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