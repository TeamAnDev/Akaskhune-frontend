import React from 'react';
import {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Root, Icon, ActionSheet, Spinner} from 'native-base';
import colors from '../config/colors';
import styles from './styles';
import {pickerPrepare, pickPhoto, takePhoto} from '../actions/file/AvatarSelect';
import {fileUploadPrepare} from '../actions/file/fileUploadReq';
import showSuccess from './Toasts/showSucces';
import showError from './Toasts/showError';
import {connect} from 'react-redux';

const BUTTONS = [
    { text: "Choose from gallery", icon: "image", iconColor: colors.blackGrey },
    { text: "Take a photo", icon: "camera", iconColor: colors.blackGrey},
    { text: "cancel", icon: "close", iconColor: colors.blackGrey }
  ];
var CANCEL_INDEX = 2;
class  FHPhotoPicker extends Component{

    constructor(props){
        super(props);
        this.props.preparePicker();
        this.props.prepareUpload();
    }
    componentDidUpdate(){
        if(this.props.errbool)
        {
            showError(this.props.error, "باشه" );
        }
        else if(this.props.success)
        {
            showSuccess("تصویر با موفقیت آپلود شد.", "باشه");
        }
    }
    render(){
        let ELEMENT;
        if(this.props.loading)
        {
            ELEMENT = (<Spinner color={colors.accent}/>);
        } else if(!this.props.loading)
        {
            ELEMENT = (  <Icon name="camera" type="SimpleLineIcons"  style={{color : colors.blackGrey, fontSize:40}} 
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
            />);
        }
        return (<View style={{flex:1, alignItems: 'center'}}>
   
        <ImageBackground style={styles.cameraView} source={{uri : (this.props.success ?  this.props.avatarSource : this.props.initialAvatar)}}  imageStyle={styles.imageView} >
          {ELEMENT}
        </ImageBackground>
        
    </View>);
    }
} 
    


const mapStateToProps = state => {
    return ({
        avatarSource : state.fileApp.avatarSelectReducer.avatarSource,
        loading : state.fileApp.fileReducer.loading,
        errbool : state.fileApp.fileReducer.errbool,
        error : state.fileApp.fileReducer.error,
        success : state.fileApp.fileReducer.success
})};
const mapDispatchToProps = dispatch => ({
   prepareUpload : () => dispatch(fileUploadPrepare()),
   preparePicker : () => dispatch(pickerPrepare()),
   pickPhoto : () => dispatch(pickPhoto()),
   takePhoto : () => dispatch(takePhoto()),

});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(FHPhotoPicker)
