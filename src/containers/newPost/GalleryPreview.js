import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {CameraKitGalleryView} from 'react-native-camera-kit';
export default class CameraPreview extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style = {{flex:1}}>
                {/* <CameraKitGalleryView
                    ref={gallery => this.gallery = gallery}
                    style={{flex: 1, marginTop: 20}}
                    minimumInteritemSpacing={10}
                    minimumLineSpacing={10}
                    
                    columnCount={3}
                    onTapImage={event => {
                        // event.nativeEvent.selected - ALL selected images ids
                    }}
                  
                /> */}
            </View>
        )
    }
}