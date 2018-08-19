import React from 'react';
import {Component} from 'react';
import {View, KeyboardAvoidingView, Animated, SafeAreaView} from 'react-native';
import LoginInputs from './LoginInputs';
import Details from './Details';
import LoginFooter from './LoginFooter';
import {getTheme} from 'react-native-material-kit';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component
{
    constructor(props){
        super(props);

    }
    componentWillMount(){
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount(){
        Animated.loop( Animated.timing(this.animatedValue, {
            toValue:1,
            duration:20000
        })).start();
       
        
    }
    render()
    {
        var color = this.animatedValue.interpolate({
            inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],
            outputRange: [ '#ffeaea', '#eaf3ff', '#ecffea', '#faeaff', '#eafff3', '#ffeaea'  ]
        });
        
        const theme = getTheme();    
        // console.warn(theme);    
        return(
            
            // <KeyboardAwareScrollView >
            
                <Animated.View style={{flex:1,backgroundColor:color }}>
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
<<<<<<< HEAD
                    
                    <View style={{flex:2}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2}}><LoginFooter/></View>
                        
                    </View>
                </Animated.View>
           
            
=======
                   
                </View>
                <View style={{flex:4}}>
                    <LoginInputs/>
                </View>
                
                <View style={{flex:2}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:2}}><LoginFooter/></View>
                </View>
            </View>
>>>>>>> 91eeeffc2f1dee006d0d4b0d93e2f5b492e85577
        )
    }
}