import React from 'react'
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import FHButton from '../../components/FHButton';
import FHError from '../../components/FHError';
import FHInput from '../../components/FHInput';
import FHPasswordInput from '../../components/FHPasswordInput';
import FHTextarea from '../../components/FHTextArea';

class CompleteProfileInputs extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    { 
        return(
            <View style={{flex:1, width:"100%"}}>
                <FHInput text="نام کاربری" onTextChange = {()=>{}} error={true}/>
                <FHInput text="نام خانوادگی" onTextChange = {()=>{}} />
                <FHInput text="ایمیل" onTextChange = {()=>{}} value=""/>
                <FHTextarea text="درباره خودتون بگید" onTextChange = {()=>{}}/>
                <FHButton title="تکمیل اطلاعات" onPress={() => {}} 
                        disabled={(true) ? false : true}
                        loading={true}/>
                <FHError errorText={this.props.error}/>
                <FHError errorText = {this.props.errorCamera}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        error : "",
        errorCamera : state.completeProfileApp.completeProfileReducer.err,
})};
const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CompleteProfileInputs)
