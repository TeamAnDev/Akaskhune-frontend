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
class SignupCompleteProfile extends Component
{
    constructor(props){
        super(props);
       
       
    }
    render()
    {
        
        return(
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1}}>
                    <AnimatedLinearGradiant customColors={colors.animatedBackgroundColor} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }} speed={3000} />
                        <View style={{flex:220, width:"100%"}}>
                            <CameraOrPictureSelect/>
                        </View>
                        <View style={{flex:420, width:"100%"}}>
                            {/* <SignupInputs/> */}
                            <FHError errorText = {this.props.error}/>
                        </View>
                        <View style={{position:"absolute", top:25, right:25}}>
                            <FHBackIcon navigation={this.props.navigation}/>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
       
        )
    }
}
const mapStateToProps = state => {
    return ({
    error : state.completeProfileApp.completeProfileReducer.err,
    
})};

export default connect(mapStateToProps, 
    null)(SignupCompleteProfile)
