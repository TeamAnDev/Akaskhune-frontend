import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import FHPhotoPicker from '../../../components/FHPhotoPicker';
import styles from '../styles';
class CameraOrPictureSelect extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {
        return(
        <View style={{flex:1, alignItems: 'center'}}>
        <View style={styles.cameraView}>
            <FHPhotoPicker initialAvatar ={this.props.initialAvatar}/>
        </View>
        </View>)
    }
}

const mapStateToProps = state => {
    return ({
    initialAvatar : state.userInfoApp.getSelfInfoReducer.data.avatar,    
})};
const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CameraOrPictureSelect)
