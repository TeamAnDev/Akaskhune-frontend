import React from 'react';
import {Component} from 'react';
import {View, Dimensions} from 'react-native';
import FHHeader from '../../components/FHHeader';
import FHButton from '../../components/FHButton';
import FHPasswordInput from '../../components/FHPasswordInput';
import { Icon } from 'native-base';
import FHError from '../../components/FHError';
import {connect} from 'react-redux';
import {changeOldPassword, changeNewPassword, changeConfirmPassword} from '../../actions/changePassword/changePasswordAction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class ChangePassword extends Component {

    render() {
        return (
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{flex:1}}>
                    <FHHeader navigation={this.props.navigation} title="تغییر رمز عبور"/>
                    <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <View style={{flex:2}}>
                            <View style={{paddingTop:Dimensions.get("window").height * 70 / 570}}>
                            <Icon type='MaterialIcons' name="check-box"/>
                            </View>
                        </View>
                        <View style={{flex:5}}>
                            <FHPasswordInput onTextChange = {this.props.changeOldPassword}
                            text="رمز عبور قدیمی"
                            error = {!this.props.oldPasswordValidation}/>
                            <FHPasswordInput onTextChange = {this.props.changeNewPassword} 
                            text="رمز عبور جدید"
                            error ={!this.props.newPasswordValidation}/>
                            <FHPasswordInput onTextChange = {this.props.changeConfirmPassword}
                            text="تکرار رمز عبور جدید"
                            error ={!this.props.confirmPasswordValidation}/>

                        </View>
                        <View style={{flex:1}}>
                            <FHButton title="ثبت رمز عبور جدید"
                            disabled ={(this.props.oldPasswordValidation && this.props.newPasswordValidation && this.props.confirmPasswordValidation) ? false : true}/>
                            <FHError errorText={this.props.error}/>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }

}

const mapStateToProps = state => {
    return({
        oldPassword : state.changePasswordApp.changePasswordReducer.oldPassword,
        newPassword : state.changePasswordApp.changePasswordReducer.newPassword,
        confirmPassword : state.changePasswordApp.changePasswordReducer.confirmPassword,
        newPasswordValidation : state.changePasswordApp.passwordCheckReducer.newValid,
        oldPasswordValidation : state.changePasswordApp.passwordCheckReducer.oldValid,
        confirmPasswordValidation : state.changePasswordApp.passwordCheckReducer.confirmValid
    });
}

const mapDispatchToProps = dispatch => {
    return({
        changeOldPassword : oldPassword => dispatch(changeOldPassword(oldPassword)),
        changeNewPassword : newPassword => dispatch(changeNewPassword(newPassword)),
        changeConfirmPassword : confirmPassword => dispatch(changeConfirmPassword(confirmPassword))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);