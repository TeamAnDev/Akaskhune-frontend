import React from 'react';
import FHButton from '../../components/FHButton';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {loginGoogle} from '../../actions/login/loginAction'
import FHTextCenter from '../../components/FHTextCenter';


const LoginFooter = (props) =>  (
        <View style={{flex : 1, alignItems: 'center'}}>
                <FHButton title = 'ورود با حساب گوگل' onPress = {props.loginGoogle}/>
                <FHTextCenter text="ورود به برنامه" onPress = {() => console.warn("login")}/>
        </View>
    )

const mapDispatchToProps = dispatch => ({
    loginGoogle : () => dispatch(loginGoogle()),
   
})  

export default connect(null, mapDispatchToProps)(LoginFooter);