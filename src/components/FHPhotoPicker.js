import React from 'react';
import {View, ImageBackground} from 'react-native';
import {Root, Icon, ActionSheet} from 'native-base';
import colors from '../config/colors';
import styles from './styles';
const BUTTONS = [
    { text: "Choose from gallery", icon: "image", iconColor: colors.blackGrey },
    { text: "Take a photo", icon: "camera", iconColor: colors.blackGrey},
    { text: "cancel", icon: "close", iconColor: colors.blackGrey }
  ];
var CANCEL_INDEX = 2;
const FHPhotoPicker = (props) => {
    return (<View style={{flex:1, alignItems: 'center'}}>
   
    <ImageBackground style={styles.cameraView} source={{uri : props.avatarSource}}  imageStyle={styles.imageView} >
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
                    props.pickPhoto();
                } else if (buttonIndex === 1){
                    props.takePhoto();
                }
              }
            )}
        />
        
    </ImageBackground>
    
</View>);
}

export default FHPhotoPicker;