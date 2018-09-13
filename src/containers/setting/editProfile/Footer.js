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
    componentWillReceiveProps(nextProps)
    {
        if(this.props.errbool !== nextProps.errbool && nextProps.errbool)
        {
            showError(this.props.error, "باشه", 30000)
        }
        if(this.props.succes !== nextProps.succes && nextProps.succes)
        {
            showSuccess("تغییرات با موفقیت صورت گرفت");  
            goBack();
        }
    }
    render()
    {
        console.warn(this.props.avatar);
        return (
            <View style={{flex:1}}>
                <FHButton title="دخیره‌ تغییرات" 
                onPress={() => this.props.editUserInfo(this.props.fullname, this.props.bio, this.props.avatar)} 
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
    avatar : state.fileApp.fileReducer.url
 });
 const mapDispatchToProps = dispatch => ({
     editUserInfo : (fullname, bio, avatar) => dispatch(editUserInfo(fullname, bio, avatar)),
 });
 
 export default connect(mapStateToProps, 
                         mapDispatchToProps)(Footer)
 