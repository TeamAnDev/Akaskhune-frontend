import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';
import FHTextarea from '../../components/FHTextArea';
import {changeBio, changeUsername, chnageNameAndFamily} from '../../actions/completeProfile/CompleteProfileFormActions';
import {completeProfile} from '../../actions/completeProfile/CompleteProfileRequest';
import {Toast} from 'native-base';

class CompleteProfileInputs extends Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidUpdate()
    {
        if(this.props.error !== undefined && this.props.error !== "")
        {
            Toast.show({
                text: this.props.error,
                buttonText: "Ok",
                type:"warning",
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" }
              });
        } else if(this.props.camError !== undefined && this.props.camError !== "")
        {
            Toast.show({
                text: this.props.error,
                buttonText: "Ok",
                type:"warning",
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" }
              });
        } 
    }
    render()
    { 
        console.log(this.props.bio)
        return(
            <View style={{flex:1, width:"100%"}}>
                <FHInput text="نام کاربری" onTextChange = {this.props.changeUsername} error={!this.props.usernameValidation}/>
                <FHInput text="نام خانوادگی" onTextChange = {this.props.chnageNameAndFamily} />
                <FHInput text="ایمیل" value={this.props.email} disabled={true}/>
                <FHTextarea text="درباره خودتون بگید" onTextChange = {this.props.changeBio}/>
                <FHButton title="تکمیل اطلاعات" 
                onPress={ () => this.props.completeProfile(this.props.username, this.props.nameAndFamily , this.props.bio, "this.props.avatar")} 
                        disabled={!this.props.usernameValidation}
                        loading={this.props.loading}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        username : state.completeProfileApp.completeProfileReducer.username,
        nameAndFamily : state.completeProfileApp.completeProfileReducer.nameAndFamily,
        email : state.signupApp.signupReducer.email,
        bio : state.completeProfileApp.completeProfileReducer.bio,
        usernameValidation : state.completeProfileApp.completeProfileReducer.usernameValidation,
        loading : state.completeProfileApp.completeProfileRequestReducer.loading,
        completeProfileSucces : state.completeProfileApp.completeProfileRequestReducer.completeProfileSucces,
        error : state.completeProfileApp.completeProfileRequestReducer.err,
        camError : state.completeProfileApp.completeProfileReducer.err,


})};
const mapDispatchToProps = dispatch => ({
    changeUsername : username => dispatch(changeUsername(username)),
    changeBio : bio => dispatch(changeBio(bio)),
    chnageNameAndFamily : nameAndFamily => dispatch(chnageNameAndFamily(nameAndFamily)),
    completeProfile : (username, fullname, bio, avatar) => dispatch(completeProfile(username, fullname, bio, avatar)),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CompleteProfileInputs)
