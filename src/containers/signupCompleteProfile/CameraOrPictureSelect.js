import React from 'react';
import {Component} from 'react';
import colors from '../../config/colors';
import styles from './styles';
import {View, Image, ImageBackground} from 'react-native';
import {Icon, ActionSheet, Container, Root} from 'native-base';
import {connect} from 'react-redux';
import {pickPhoto, takePhoto} from '../../actions/completeProfile/CompleteProfileActions';
const BUTTONS = [
    { text: "Choose from gallery", icon: "image", iconColor: colors.blackGrey },
    { text: "Take a photo", icon: "camera", iconColor: colors.blackGrey},
    { text: "cancel", icon: "close", iconColor: colors.blackGrey }
  ];
var CANCEL_INDEX = 2;
class CameraOrPictureSelect extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {
        return(
        <View style={{flex:1, alignItems: 'center'}}>
            <Root>
            <ImageBackground style={styles.cameraView} source={{uri : this.props.avatarSource}}  imageStyle={styles.imageView} >
                <Icon name="camera" type="SimpleLineIcons"  style={{color : colors.blackGrey, fontSize:40}} 
                onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        title: "Choose profile pic"
                      },
                      buttonIndex => {
                        if(buttonIndex === 0){
                            this.props.pickPhoto();
                        } else if (buttonIndex === 1){
                            this.props.takePhoto();
                        }
                      }
                    )}
                />
                
            </ImageBackground>
            </Root>
        </View>)
    }
}

const mapStateToProps = state => {
    return ({
    error : state.completeProfileApp.completeProfileReducer.err,
    avatarSource : state.completeProfileApp.completeProfileReducer.avatarSource,
    
    
})};
const mapDispatchToProps = dispatch => ({
    pickPhoto : () => dispatch(pickPhoto()),
    takePhoto : () => dispatch(takePhoto()),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CameraOrPictureSelect)
