import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import {login, changePassword, changeEmail} from '../../actions/login/loginAction';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';

class LoginInputs extends Component
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
                <FHInput text="ایمیل" onTextChange = {this.props.changeEmail}/>
                <FHPasswordInput text="رمزعبور" onTextChange = {this.props.changePassword}/> 
                <FHButton title="ورود" onPress={this.props.login}/>
                <Text style = {{color:'white',alignSelf: 'center', marginTop:10}} onPress = {() => console.warn("")}>رمز عبور خود را فراموش کرده‌اید؟</Text>
                <FHError errorText={this.props.error}/>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    error : state.loginApp.loginReducer.err,
});
const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword : password => dispatch(changePassword(password)),
    login : () => dispatch(login())

});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(LoginInputs)
