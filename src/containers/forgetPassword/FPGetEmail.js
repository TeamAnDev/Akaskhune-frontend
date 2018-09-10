import React from 'react';
import {Component} from 'react';
import {View, Dimensions, Text} from 'react-native';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
import FHInput from '../../components/FHInput';
import FHButton from '../../components/FHButton';
import FHBackIcon from '../../components/FHBackIcon';
const marginFromTop = Dimensions.get("window").height * 165/640;
export default class FPGetEmail extends Component
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
                            
                        }} speed={3000} />
                    <View style = {{marginTop : marginFromTop, justifyContent : 'center' , alignItems : 'center'}}>
                        <Text style = {{color : 'white'}}>
                            اگر رمز عبور خود را فراموش کرده‌اید،‌ایمیل خود را اینجا وارد نمایید
                        </Text>
                        <View style={{marginTop : marginFromTop / 4}}>
                            <FHInput onTextChange ={()=>{}} 
                                    text = "آدرس ایمیل" 
                                    error = {false}/>
                        </View>
                        <View>
                            <FHButton title="ارسال لینک بازیابی" loading={false} onPress = {()=>{}}/>
                        </View>
                        
                    </View>
            </View>
            <View style={{position:"absolute", top:30, right:20}}>
                <FHBackIcon navigation={this.props.navigation}/>
            </View>
            </KeyboardAwareScrollView>
       
        )
    }
}