import React from 'react';
import {Component} from 'react';
import {View, Dimensions ,Text} from 'react-native';
import FHHeader from '../../components/FHHeader'
import FHButton from '../../components/FHButton'
import CameraPriview from './CameraPreview';
import GalleryPreview from './GalleryPreview';
import colors from '../../config/colors';
import SlidingUpPanel from 'rn-sliding-up-panel';
import BottomSheet from './BottomSheet';
import {connect} from 'react-redux';
import {resetSelectingPost} from '../../actions/newPost/postActions';
import {cropPhoto} from '../../actions/newPost/gallerySelectActions';
import {navigate} from '../../../NavigationService'
const bottomOfButton = Dimensions.get("window").height * 3 / 100;
class NewPost extends Component{

      constructor(props) {
        super(props)
        this.state = {
          buttonDis: true,
        }
        this.props.reset();
        
      }
    componentWillReceiveProps(nextProps)
    {
      console.warn(nextProps.postImageSelected);
      if(nextProps.postImageSelected === true && this.props.postImageSelected !== nextProps.postImageSelected)
      {
        this.setState({buttonDis:false})
      }
      if(nextProps.postImageSelected === false && this.props.postImageSelected !== nextProps.postImageSelected)
      {
        this.setState({buttonDis:true})
      }
      if(nextProps.postCropped !== this.props.postCropped && this.postCropped === true)
      {
        navigate("NewPostComplete");
      }
    }
    render()
    {
      console.warn(this.props.postImageSource);
        return(
            <View style = {{flex:1}}>
                <FHHeader customIcon = "x" customIconType = "Feather" title="گالری تصاویر"/>
                <View style = {{flex:1}}>
                    <CameraPriview/>
                    
                    <View style={{width:"100%", height:"100%", position:"absolute", bottom:bottomOfButton}}>
                        <BottomSheet/>
                    </View>
                    <View style={{width:"100%", position:"absolute", bottom:bottomOfButton}}>
                        <FHButton title="مرحله بعدی" onPress={() => this.props.cropPhoto(this.props.postImageSource)} disabled = {this.state.buttonDis}/>
                    </View>
                </View>
                
            </View>
        )
    }
}


const mapStateToProps = state => {
  return({
    postImageSelected : state.newPostApp.galleryReducer.gallerySelected,
    postImageSource : state.newPostApp.galleryReducer.imageSource,
    postCropped : state.newPostApp.newPostReducer.postSelected,

  });
}

const mapDispatchToProps = dispatch => {
  return({
      cropPhoto : (path) => dispatch(cropPhoto(path)),
      reset : () => dispatch(resetSelectingPost())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);