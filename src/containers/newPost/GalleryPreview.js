import React from 'react';
import {Component} from 'react';
import {View, Dimensions} from 'react-native';
import CameraRollPicker from './cameraRollPicker/index';
import {connect} from 'react-redux';
import {imageSelect, imageUnselect} from '../../actions/newPost/gallerySelectActions';
class GalleryPreview extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <View style = {{flex:1}}>
                <CameraRollPicker
                    callback={(images, current)=>{
                    
                        if(images.length !== 0)
                        {
                            this.props.setImage(images[0].uri);
                        }
                        else if(images.length === 0)
                        {
                            
                            this.props.unsetImage()
                        }
                }} 
                
                    imageMargin={Dimensions.get("window").width * 13 / 360}
                    maximum={1}/>
                
            </View>
        )
    }
}


const mapStateToProps = state => {
    return({
    });
  }
  
  const mapDispatchToProps = dispatch => {
    return({
        setImage : (imageSource) => dispatch(imageSelect(imageSource)),
        unsetImage : () => dispatch(imageUnselect()),
    });
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(GalleryPreview);