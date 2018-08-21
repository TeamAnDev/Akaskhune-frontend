import React from 'react';
import {Component} from 'react';
import {View, KeyboardAvoidingView, Animated, SafeAreaView} from 'react-native';
import SignupFooter from './SignupFooter';
import Details from '../login/Details';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Container, Content, Footer} from 'native-base';
import SignupInputs from './SignupInputs';
import FHBackIcon from '../../components/FHBackIcon';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
export default class Signup extends Component
{
    constructor(props){
        super(props);

    }
    render()
    {
        return(
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
                    <AnimatedLinearGradiant customColors={[ colors.primaryColor, "#618e8a", "#4d2968", "#3c358c","#39787a", "#618e8a",colors.primaryColor  ]} style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }} speed={3000}>
                        <View style={{flex:3, width:"100%"}}>
                        <Details/>
                        </View>
                        <View style={{flex:6, width:"100%"}}>
                            <SignupInputs/>
                        </View>
                        <View style={{flex:2, width:"100%"}}>
                            <SignupFooter/>
                        </View>
                        <View style={{position:"absolute", top:20, right:20}}>
                            <FHBackIcon/>
                        </View>
                    </AnimatedLinearGradiant>
                </KeyboardAwareScrollView>
       
        )
    }
}