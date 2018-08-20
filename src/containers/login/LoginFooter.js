import React from 'react';
import FHButton from '../../components/FHButton';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles'
import {loginGoogle, signupPage} from '../../actions/login/loginAction'
import FHTextCenter from '../../components/FHTextCenter';


const LoginFooter = (props) =>  (
        <View style={styles.container}>
            
            <View style={{flex:1, width:"100%"}}>
                    <FHButton title = 'ورود با حساب گوگل' onPress = {() => console.warn("log in with google")}/>
                    <FHTextCenter text="ثبت‌ نام" onPress={props.signup} />
            </View>
        </View>
    )

const mapDispatchToProps = dispatch => ({
    loginGoogle : () => dispatch(loginGoogle()),
    signup : () => dispatch(signupPage())
})  

export default connect(null, mapDispatchToProps)(LoginFooter);