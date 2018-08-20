import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import {changeEmail, changePassword, changePasswordConfirm } from '../../actions/signup/signupActions';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';

class SignupInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password :""
        }
    }
    render()
    { 
        return(
            <View style={{flex:1, width:"100%", marginTop:22}}>
                <FHInput text="آدرس ایمیل" onTextChange = {this.props.changeEmail} error={!this.props.emailValidation}/>
                <FHPasswordInput text="رمزعبور" onTextChange = {this.props.changePassword} /> 
                <FHPasswordInput text="تکرار رمزعبور" onTextChange = {this.props.changeConfirmPassword} error = {!this.props.passwordValidation}/> 
                <FHButton title="ثبت نام" onPress={()=>{}} 
                        disabled={(this.props.emailValidation && this.props.passwordValidation) ? false : true}/>
                <FHError errorText=""/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
    error : state.signupApp.signupReducer.err,
    passwordValidation : state.signupApp.passwordCheckReducer.valid,
    emailValidation : state.signupApp.emailCheckReducer,
})};
const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword : password => dispatch(changePassword(password)),
    changeConfirmPassword : confirmPassword => dispatch(changePasswordConfirm(confirmPassword)),

});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(SignupInputs)
