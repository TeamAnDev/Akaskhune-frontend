import React from 'react';
import {Component} from 'react';
import {View, Dimensions, Text} from 'react-native';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
import FHInput from '../../components/FHInput';
import FHButton from '../../components/FHButton';
import FHBackIcon from '../../components/FHBackIcon';
import {forgetPassword} from '../../actions/login/forgetPassword';
import {connect} from 'react-redux';
import {goBack} from '../../../NavigationService';
import showSuccess from '../../components/Toasts/showSucces';
import showError from '../../components/Toasts/showError';
const marginFromTop = Dimensions.get("window").height * 165/640;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
class FPGetEmail extends Component
{
    constructor(props){
        super(props);
        this.state = {
            valid : false, 
            email : '',
        }

    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.success !== this.props.success && nextProps.success)
        {
            showSuccess("پسورد جدید برای شما ایمیل شد");
            goBack();
        }
        if(nextProps.errbool !== this.props.errbool && nextProps.errbool)
        {
            showError(nextProps.error);
        }
    }
    emailChanged = (email) => {
        if(EMAIL_REGEX.test(email))
        {
            this.setState({email, valid : true})
        }
        else 
        {
            this.setState({email, valid : false})
        }
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
                            <FHInput onTextChange ={this.emailChanged} 
                                    text = "آدرس ایمیل" 
                                    error = {!this.state.valid}/>
                        </View>
                        <View>
                            <FHButton 
                            title="ارسال لینک بازیابی" 
                            loading={this.props.loading}  
                            disabled={!this.state.valid} 
                            onPress = {() => {this.props.forgetPassword(this.state.email)}}/>
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
const mapStateToProps = state => {
    return({
        loading : state.loginApp.forgetPasswordReducer.loading,
        success : state.loginApp.forgetPasswordReducer.success,
        error : state.loginApp.forgetPasswordReducer.error,
        errbool : state.loginApp.forgetPasswordReducer.errbool,

    });
}

const mapDispatchToProps = dispatch => {
    return({
        forgetPassword : (email) => dispatch(forgetPassword(email)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(FPGetEmail);