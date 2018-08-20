import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import {login, changePassword, changeEmail} from '../../actions/login/loginAction';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';

export default class SignupInputs extends Component
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
            <View style={{flex:1, width:"100%"}}>
                <FHInput text="آدرس ایمیل" onTextChange = {()=>{}}/>
                <FHPasswordInput text="رمزعبور" onTextChange = {()=>{}}/> 
                <FHPasswordInput text="تکرار رمزعبور" onTextChange = {()=>{}}/> 
                <FHButton title="ثبت نام" onPress={()=>{}}/>
                <FHError errorText=""/>
            </View>
        );
    }
}


// const mapStateToProps = state => ({
//     error : state.loginApp.loginReducer.err,
// });
// const mapDispatchToProps = dispatch => ({
//     changeEmail: email => dispatch(changeEmail(email)),
//     changePassword : password => dispatch(changePassword(password)),
//     login : () => dispatch(login())

// });

// export default connect(mapStateToProps, 
//                         mapDispatchToProps)(LoginInputs)
