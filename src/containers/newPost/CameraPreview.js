import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
export default class CameraPreview extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style = {{flex:1}}>
                <RNCamera ref={ref => {
                    this.camera = ref;
                    }}
                    type={RNCamera.Constants.Type.back}
                    style={{width:"100%", height:"100%"}}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    />                
            </View>
        )
    }
}