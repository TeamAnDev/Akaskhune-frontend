import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {pickPhoto, takePhoto} from '../../actions/completeProfile/CameraAvatarSelectActions';
import FHPhotoPicker from '../../components/FHPhotoPicker';
import styles from './styles';

class CameraOrPictureSelect extends Component{
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
