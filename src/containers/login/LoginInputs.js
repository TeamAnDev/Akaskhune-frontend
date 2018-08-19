import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {MKTextField} from 'react-native-material-kit';
import {connect} from 'react-redux';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import FHButton from '../../components/FHButton';
import {login, changePassword, changeEmail} from '../../actions/login/loginAction';

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
               <View style={{flexDirection:"row", flex:1}} >
                    <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                       <FHButton title="ورود" onPress={this.props.login}/>
                    </View>
                    <View style={{flex:1}} >
                    </View>
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword : password => dispatch(changePassword(password)),
    login : () => dispatch(login())

})

export default connect(null, 
                        mapDispatchToProps)(LoginInputs)
