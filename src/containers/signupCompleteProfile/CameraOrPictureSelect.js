import React from 'react';
import {Component} from 'react';
import colors from '../../config/colors';
import styles from './styles';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {pickPhoto} from '../../actions/completeProfile/CompleteProfileActions';
class CameraOrPictureSelect extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
        <View style={{flex:1, alignItems: 'center'}}>
            <View style={styles.cameraView}>
                <Icon name="camera" type="SimpleLineIcons"  style={{color : colors.primaryColor, fontSize:40}} onPress={this.props.pickPhoto}/>
                
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
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(CameraOrPictureSelect)
