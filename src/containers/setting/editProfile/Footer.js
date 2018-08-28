import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import FHButton from '../../../components/FHButton';
import {connect} from 'react-redux';
import {editUserInfo} from '../../../actions/userInfo/editUserInfoRequest'
import {Toast} from 'native-base';
import {goBack} from '../../../../NavigationService'
import showSuccess from '../../../components/Toasts/showSucces';
import showError from '../../../components/Toasts/showError';

class Footer extends Component
{
    constructor(props)
    {
        super(props)
    }
    componentDidUpdate() {
        if(this.props.errbool)
        {
           showError(this.props.error, "باشه", 30000)
        } else if(this.props.succes)
        {
           showSuccess("تغییرات با موفقیت صورت گرفت", "بازگشت", 15000, goBack);  
        }
      }
    render()
    {
        return (
            <View style={{flex:1}}>
                <FHButton title="دخیره‌ تغییرات" 
                onPress={() => this.props.editUserInfo(this.props.fullname, this.props.bio)} 
                        loading={this.props.loading}/>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    fullname : state.userInfoApp.editUserInfoReducer.fullname,
    bio : state.userInfoApp.editUserInfoReducer.bio,
    succes : state.userInfoApp.editUserInfoReducer.succes,
    error : state.userInfoApp.editUserInfoReducer.error,
    loading : state.userInfoApp.editUserInfoReducer.loading,
    errbool : state.userInfoApp.editUserInfoReducer.errbool,
 });
 const mapDispatchToProps = dispatch => ({
     editUserInfo : (fullname, bio) => dispatch(editUserInfo(fullname, bio)),
 });
 
 export default connect(mapStateToProps, 
                         mapDispatchToProps)(Footer)
 