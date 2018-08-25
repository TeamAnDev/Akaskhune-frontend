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
    
    
    componentDidUpdate = () => 
    {
        console.warn(this.props.succes)
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
        succes : state.completeProfileApp.completeProfileRequestReducer.completeProfileSucces,
        


})};
export default connect(mapStateToProps, 
                        null)(SignupCompleteProfile)
