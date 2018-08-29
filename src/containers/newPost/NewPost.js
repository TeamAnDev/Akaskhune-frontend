import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import FHHeader from '../../components/FHHeader'
import CameraPriview from './CameraPreview';
import colors from '../../config/colors';
export default class NewPost extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style = {{flex:1}}>
                <FHHeader customIcon = "x" customIconType = "Feather" title="گالری تصاویر"/>
                <View style = {{flex:1}}>
                    <View style={{flex:250, backgroundColor:colors.grey}} >
                        <CameraPriview/>
                    </View>
                    <View style={{flex:310}} >
                    </View>
                </View>
            </View>
        )
    }
}