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
import showError from '../../components/Toasts/showError';


class CompleteProfileInputs extends Component
{
    constructor(props)
    {
        super(props);
        this.inputs = {};
        
    }
    componentWillReceiveProps(nextProps) 
    {
        if(nextProps.error !== undefined && nextProps.error !== "" && this.props.error !== nextProps.error)
        {
           showError(nextProps.error, "باشه");
        } 
    }
    render()
    { 
        console.log(this.props.bio)
        return(
            <View style={{flex:1, width:"100%"}}>
                <FHInput 
                    text="نام کاربری" 
                    onTextChange = {this.props.changeUsername} 
                    error={!this.props.usernameValidation}
                    onSubmitEditing = {() => this.inputs['name']._root.focus()}
                    returnKeyType={ "next" }  
                    blurOnSubmit={false} />

                <FHInput 
                    text="نام و نام‌ خانوادگی" 
                    onTextChange = {this.props.chnageNameAndFamily} 
                    refrence = {(input) => this.inputs['name'] = input}
                    onSubmitEditing = {() => this.inputs['bio']._root.focus()}
                    returnKeyType={ "next" }  
                    blurOnSubmit={false} />

                <FHInput 
                    text="ایمیل" 
                    value={this.props.email} 
                    disabled={true}
                     />

                <FHTextarea 
                    text="درباره خودتون بگید" 
                    onTextChange = {this.props.changeBio}
                    refrence = {(input) => this.inputs['bio'] = input}  
                     />

                <FHButton 
                    title="تکمیل اطلاعات" 
                    onPress={ () => this.props.completeProfile(this.props.username, this.props.nameAndFamily , this.props.bio, this.props.avatar, this.props.password, this.props.email)} 
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
        avatar : state.fileApp.fileReducer.url,
        password : state.signupApp.signupReducer.password


})};
const mapDispatchToProps = dispatch => ({
    changeUsername : username => dispatch(changeUsername(username)),
    changeBio : bio => dispatch(changeBio(bio)),
    chnageNameAndFamily : nameAndFamily => dispatch(chnageNameAndFamily(nameAndFamily)),
    completeProfile : (username, fullname, bio, avatar, password, email) => dispatch(completeProfile(username, fullname, bio, avatar, password, email)),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CompleteProfileInputs)
