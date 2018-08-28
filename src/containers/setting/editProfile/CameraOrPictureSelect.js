import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import FHPhotoPicker from '../../../components/FHPhotoPicker';
import styles from '../styles';
import {pickPhoto, takePhoto} from '../../../actions/userInfo/avatarSelect';
class CameraOrPictureSelect extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {
        console.warn(this.props.initialAvatar )
        return(
        <View style={{flex:1, alignItems: 'center'}}>
        <View style={styles.cameraView}>
            <FHPhotoPicker
            pickPhoto={this.props.pickPhoto}
            takePhoto={this.props.takePhoto} 
            avatarSource={this.props.avatarSource === "" ? this.props.initialAvatar : this.props.avatarSource}/>
        </View>
        </View>)
    }
}

const mapStateToProps = state => {
    return ({
    error : state.userInfoApp.avatarSelectReducer.error,
    initialAvatar : state.userInfoApp.getSelfInfoReducer.data.avatar,
    avatarSource : state.userInfoApp.avatarSelectReducer.avatarSource,
    
    
})};
const mapDispatchToProps = dispatch => ({
    pickPhoto : () => dispatch(pickPhoto()),
    takePhoto : () => dispatch(takePhoto()),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CameraOrPictureSelect)
