import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
import { PermissionsAndroid } from 'react-native';

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

export default class CameraPreview extends Component{
    constructor(props){
        super(props);
        requestCameraPermission();
    }
    render()
    {
        return(
            <View style = {{flex:1}}>
                <CameraKitCamera
                ref={cam => this.camera = cam}
                style={{
                    flex:1,
                    backgroundColor: 'red'
                }}
                cameraOptions={{
                            // off/on(default)
                     
                }}
                />
            </View>
        )
    }
}