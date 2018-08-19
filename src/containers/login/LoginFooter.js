import React from 'react';
import FHButton from '../../components/FHButton';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles'
import {loginGoogle, signup} from '../../actions/login/loginAction'


const LoginFooter = (props) =>  (
        <View style={styles.container}>
            
            <View style={{flex:1}}>
                    <FHButton title = 'ورود با حساب گوگل' onPress = {() => console.warn("log in with google")}/>
                    <Text style = {{color:'white',alignSelf: 'center', margin:10}} onPress = {() => console.warn("sign up")}>ثبت نام</Text>
            </View>
        </View>
    )

const mapDispatchToProps = dispatch => ({
    loginGoogle : () => dispatch(loginGoogle()),
    signup : () => dispatch(signup())
})  

export default connect(null, mapDispatchToProps)(LoginFooter);