import React from 'react';
import {Component} from 'react';
import {View, Dimensions} from 'react-native';
import CameraRollPicker from './cameraRollPicker/index';
import {connect} from 'react-redux';
import {imageSelect, imageUnselect} from '../../actions/newPost/gallerySelectActions';

async function requestGalleryPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'دسترسی به آلبوم',
          'message': 'برنامه‌ی عکاسخانه برای استفاده از آلبوم به دسترسی آلبوم نیاز دارد. ' +
                     'لطفا اجازه‌ی استفاده از آلبوم را بدهید.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.warn("You can use the camera")
      } else {
        console.warn("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }
class GalleryPreview extends Component{
    constructor(props){
        super(props);
        requestGalleryPermission();
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
                selectSingleItem = {true}
                    imageMargin={Dimensions.get("window").width * 13 / 360}
                    />
                
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