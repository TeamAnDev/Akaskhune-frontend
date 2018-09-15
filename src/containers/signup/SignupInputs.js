import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import {changeEmail, changePassword, changePasswordConfirm } from '../../actions/signup/signupActions';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';
import {signup} from '../../actions/signup/signupRequest';

class SignupInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.inputs = {};
    }
    componentWillReceiveProps(nextProps)
    {
        if(this.props.signupSucces !== nextProps.signupSucces && nextProps.signupSucces === true)
        {
            this.props.navigation.navigate('SignupCompleteProfile')
        }
    }

    render()
    { 
        return(
            <View style={{flex:1, width:"100%", marginTop:22}}>
                <FHInput 
                    text="آدرس ایمیل" 
                    onTextChange = {this.props.changeEmail} 
                    error={!this.props.emailValidation}
                    onSubmitEditing = {() => this.inputs['password']._root.focus()}
                    returnKeyType={ "next" }
                    blurOnSubmit={false}     />

                <FHPasswordInput 
                    text="رمزعبور" 
                    onTextChange = {this.props.changePassword} 
                    error = {!this.props.passwordValidation}
                    refrence = {(input) => this.inputs['password'] = input}
                    onSubmitEditing = {() => this.inputs['confirmPassword']._root.focus()}
                    returnKeyType={ "next" }  
                    blurOnSubmit={false}   
                  /> 
                 
                <FHPasswordInput 
                    text="تکرار رمزعبور" 
                    onTextChange = {this.props.changeConfirmPassword} 
                    error = {!this.props.confirmPasswordValidation}
                    refrence = {(input) => this.inputs['confirmPassword'] = input}
                    onSubmitEditing = {() => {(this.props.emailValidation && this.props.confirmPasswordValidation) ? this.props.signup(this.props.email, this.props.password) : null}}
                    returnKeyType={ "done" }  /> 
                <FHButton 
                    title="ثبت نام" 
                    onPress={() => this.props.signup(this.props.email, this.props.password)} 
                    disabled={!(this.props.emailValidation && this.props.confirmPasswordValidation) }
                    loading={this.props.loading}/>
                <Text 
                    style = {{color:'white',alignSelf: 'center', margin:3, textAlign : 'center'}} >
                    رمز عبور باید حداقل شامل ۸ کاراکتر،حروف و اعداد انگلیسی باشد.
                </Text>

                <FHError errorText={this.props.error}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
    error : state.signupApp.signupRequestReducer.err,
    confirmPasswordValidation : state.signupApp.passwordCheckReducer.valid,
    passwordValidation : state.signupApp.passwordCheckReducer.passvalid,
    emailValidation : state.signupApp.emailCheckReducer,
    email : state.signupApp.signupReducer.email,
    password : state.signupApp.signupReducer.password,
    loading : state.signupApp.signupRequestReducer.loading,
    signupSucces : state.signupApp.signupRequestReducer.signupSucces
    
})};
const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword : password => dispatch(changePassword(password)),
    changeConfirmPassword : confirmPassword => dispatch(changePasswordConfirm(confirmPassword)),
    signup : (email) => dispatch(signup(email)),


});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(SignupInputs)
