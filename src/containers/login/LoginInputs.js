import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {MKTextField} from 'react-native-material-kit';
import {connect} from 'react-redux';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import FHButton from '../../components/FHButton';
import {login, changePassword, changeEmail} from '../../actions/login/loginAction';
import FHError from '../../components/FHError';

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
            <View style={{flex:1}}>
                <View style={{flexDirection:"row", flex:1}} >
                    <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                        <EmailInput onTextChange = {this.props.changeEmail}/>
                    </View>
                    <View style={{flex:1}} >
                    </View>
                </View>
                <View style={{flexDirection:"row",  flex:1}} >
                    <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                        <PasswordInput onTextChange = {this.props.changePassword}/>
                    </View>
                    <View style={{flex:1}} >
                    </View>
                </View>
                <View style={{flex:2}}>
                    <View style={{flexDirection:"row", flex:1}} >
                        <View style={{flex:1}} >
                        </View>
                        <View style={{flex:10}} >
                        <FHButton title="ورود" onPress={this.props.login}/>
                        </View>
                        <View style={{flex:1}} >
                        </View>
                    </View>
                    <View style={{flexDirection:"row", flex:1}} >
                    <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                       <Text style = {{alignSelf: 'center', marginTop:10}} onPress = {() => console.warn("")}>رمز عبور خود را فراموش کرده‌اید؟</Text>
                    </View>
                    <View style={{flex:1}} >
                    </View>
                </View>
                </View>
               
                <View style={{flexDirection:"row", flex:1}} >
                    <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                       <FHError errorText={this.props.error}/>
                    </View>
                    <View style={{flex:1}} >
                    </View>
                </View>
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
