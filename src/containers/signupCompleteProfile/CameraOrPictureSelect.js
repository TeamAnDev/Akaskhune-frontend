import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import FHPhotoPicker from '../../components/FHPhotoPicker';
import styles from './styles';

export default class CameraOrPictureSelect extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {
        return(

        <View style={{flex:1, alignItems: 'center'}}>
        <View style={styles.cameraView}>
            <FHPhotoPicker/>
        </View>
        </View>)
    }
}
