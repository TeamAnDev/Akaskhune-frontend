import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FHBackIcon from '../../components/FHBackIcon';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
import {NavigationActions} from 'react-navigation';
import CameraOrPictureSelect from './CameraOrPictureSelect';
import {connect} from 'react-redux';
import FHError from '../../components/FHError';
import CompleteProfileInputs from './CompleteProfileInputs';
import { Container , Root, Toast} from 'native-base';
 class SignupCompleteProfile extends Component
{
    constructor(props){
        super(props);
       
       
    }
    componentDidUpdate()
    {
        if(this.props.error !== undefined && this.props.error !== "")
        {
            Toast.show({
                text: this.props.error,
                buttonText: "Ok",
                type:"danger",
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" },
              });
        } else if(this.props.camError !== undefined && this.props.camError !== "")
        {
            Toast.show({
                text: this.props.error,
                buttonText: "Ok",
                type:"danger",
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" }
              });
        } 
        if(this.props.succes){
            this.props.navigation.navigate('Profile');
        }
    }
    render()
    {
        
        return(
            <Root>
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1}}>
            <Container>
                
                    <AnimatedLinearGradiant customColors={colors.animatedBackgroundColor} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }} speed={4000} />
                        <View style={{flex:22, width:"100%"}}>
                            <CameraOrPictureSelect/>
                        </View>
                        <View style={{flex:42, width:"100%"}}>
                            <CompleteProfileInputs/>                 
                        </View>
                        <View style={{position:"absolute", top:25, right:25}}>
                            <FHBackIcon navigation={this.props.navigation}/>
                        </View>
            </Container>
            </View>
            </KeyboardAwareScrollView>
            </Root>
       
        )
    }
}

const mapStateToProps = state => {
    return ({
        error : state.completeProfileApp.completeProfileRequestReducer.err,
        camError : state.completeProfileApp.completeProfileReducer.err,


})};
export default connect(mapStateToProps, 
                        null)(SignupCompleteProfile)
