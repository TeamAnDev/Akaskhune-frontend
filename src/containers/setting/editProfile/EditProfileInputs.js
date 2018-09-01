import React from 'react'
import {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../../components/FHButton';
import FHInput from '../../../components/FHInput';
import FHTextarea from '../../../components/FHTextArea';
import {Toast} from 'native-base';
import {setPrevDetails, changeBio, changeFullname} from '../../../actions/userInfo/editUserInfoRequest';
import showError from '../../../components/Toasts/showError';

class EditProfileInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.props.setPrevDetails(this.props.prevFullname, this.props.prevBio);
    }
    render()
    { 
        console.log(this.props.bio)
        return(
            <View style={{flex:1, width:"100%"}}>
                <FHInput value={this.props.username} disabled={true} ordinary={true} />
                <FHInput value={this.props.fullname} onTextChange = {this.props.changeFullname}  ordinary={true}  />
                <FHInput text="ایمیل" value={this.props.email} disabled={true}  ordinary={true} />
                <FHTextarea value={this.props.bio} onTextChange = {this.props.changeBio}  />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        username : state.userInfoApp.getSelfInfoReducer.data.username,
        email : state.userInfoApp.getSelfInfoReducer.data.email,
        prevFullname : state.userInfoApp.getSelfInfoReducer.data.fullname,
        prevBio : state.userInfoApp.getSelfInfoReducer.data.bio,
        fullname : state.userInfoApp.editUserInfoReducer.fullname,
        bio : state.userInfoApp.editUserInfoReducer.bio,
})};
const mapDispatchToProps = dispatch => ({
    setPrevDetails : (fullname, bio) => dispatch(setPrevDetails(fullname, bio)),
    changeBio : (bio) => dispatch(changeBio(bio)),
    changeFullname : (fullname) => dispatch(changeFullname(fullname)),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(EditProfileInputs)
