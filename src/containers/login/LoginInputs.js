import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import {changePassword, changeEmail} from '../../actions/login/loginAction';
import {login} from '../../actions/login/loginRequest'
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';
import {Form} from 'native-base';

class LoginInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email : "",
            password :""
        }
        if(this.props.loginSuccess == true) {
            this.props.navigation.navigate('BottomTabRouter')
        }
    }

    componentDidUpdate() {
        if(this.props.loginSuccess == true) {
            this.props.navigation.navigate('BottomTabRouter')
        }
    }

    render()
    { 
        return(
            <View style={{flex:1, width:"100%", marginTop:22}}>
                <Form>
                <FHInput text="ایمیل" onTextChange = {this.props.changeEmail} error = {!this.props.emailValidation}/>
                <FHPasswordInput text="رمزعبور" onTextChange = {this.props.changePassword} error ={!this.props.passwordValidation}/> 
                <FHButton title="ورود" onPress={() => this.props.login(this.props.email, this.props.password)}
                        disabled={(this.props.emailValidation && this.props.passwordValidation) ? false : true}
                        loading={this.props.loading}
                />
                <Text style = {{color:'white',alignSelf: 'center', marginTop:10}} onPress = {() => console.warn("")}>رمز عبور خود را فراموش کرده‌اید؟</Text>
                <FHError errorText={this.props.error}/>
                </Form>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    error : state.loginApp.loginRequestReducer.err,
    emailValidation : state.loginApp.emailCheckReducer,
    passwordValidation : state.loginApp.passwordCheckReducer,
    email : state.loginApp.loginReducer.email,
    password : state.loginApp.loginReducer.password,
    loading : state.loginApp.loginRequestReducer.loading,
    loginSuccess : state.loginApp.loginRequestReducer.loginSuccess

});
const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword : password => dispatch(changePassword(password)),
    login : (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(LoginInputs)
