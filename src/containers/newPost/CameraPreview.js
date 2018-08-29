import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
export default class CameraPreview extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style = {{flex:1}}>
                <CameraKitCamera
                ref={cam => this.camera = cam}
                style={{
                    width:"100%",
                    height:"100%",
                    backgroundColor: 'red'
                }}
                cameraOptions={{
                    flashMode: 'auto',             // on/off/auto(default)
                    focusMode: 'on',               // off/on(default)
                    zoomMode: 'on',                // off/on(default)
                    ratioOverlay:'3:4',            // optional, ratio overlay on the camera and crop the image seamlessly
                    ratioOverlayColor: '#00000077' // optional
                }}
                />
            </View>
        )
    }
}