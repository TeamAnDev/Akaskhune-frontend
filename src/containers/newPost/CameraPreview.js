import React from 'react';
import {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
import { PermissionsAndroid } from 'react-native';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import {takePhoto} from '../../actions/newPost/cameraSelectActions'
async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'دسترسی به دوربین',
        'message': 'برنامه‌ی عکاسخانه برای استفاده از دوربین به دسترسی دوربین نیاز دارد. ' +
                   'لطفا اجازه‌ی استفاده از دوربین را بدهید.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.warn("You can use the camera")
    } else {
      console.warn("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

class CameraPreview extends Component{
    constructor(props){
        super(props);
        requestCameraPermission();
    }
    render()
    {
        return(
          <View style = {{flex:1}}>
            <TouchableOpacity style={{flex:1}} onPress={this.props.takePhoto}>
            <View style = {{flex:1}}>
                <CameraKitCamera
                ref={cam => this.camera = cam}
                style={{
                    flex:1,
                    backgroundColor: colors.grey
                }}
                cameraOptions={{
                }}
                />
            </View>
            </TouchableOpacity>
          </View>
        )
    }
}

const mapStateToProps = state => {
  return({
  });
}

const mapDispatchToProps = dispatch => {
  return({
      takePhoto : () => dispatch(takePhoto())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraPreview);