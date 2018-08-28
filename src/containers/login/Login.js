import React from 'react';
import {Component} from 'react';
import {View, KeyboardAvoidingView, Animated, SafeAreaView} from 'react-native';
import LoginInputs from './LoginInputs';
import Details from './Details';
import LoginFooter from './LoginFooter';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Container, Content, Footer} from 'native-base';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
export default class Login extends Component
{
    constructor(props){
        super(props);

    }
    render()
    {  
       
        return(
            
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1}}>
                <AnimatedLinearGradiant customColors={colors.animatedBackgroundColor} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }} speed={3000}/>
               
                    <View style={{flex:3, width:"100%"}}>
                        <Details/>
                    </View>
                    <View style={{flex:6, width:"100%"}}>
                        <LoginInputs navigation={this.props.navigation}/>
                    </View>
                    <View style={{flex:2, width:"100%"}}>
                        <LoginFooter navigation={this.props.navigation}/>
                    </View>
                
                </View>
                </KeyboardAwareScrollView>
       
        )
    }
}