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
const bottomOfButton = Dimensions.get("window").height * 3 / 100;
class NewPost extends Component{

      constructor(props) {
        super(props)
        this.state = {
          buttonDis: false,
        }
    
        
      }
    componentWillReceiveProps(nextProps)
    {
      console.warn(nextProps.postImageSource);
      if(nextProps.postImageSource !== "" && this.props.postImageSource !== nextProps.postImageSource)
      {
        this.setState({buttonDis:true})
      }
      if(nextProps.postImageSource === "" && this.props.postImageSource !== nextProps.postImageSource)
      {
        this.setState({buttonDis:false})
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
                        <FHButton title="مرحله بعدی" onPress={()=>{}} disabled = {this.state.buttonDis}/>
                    </View>
                </View>
                
            </View>
        )
    }
}


const mapStateToProps = state => {
  return({
    postImageSource : state.newPostApp.newPostReducer.postImageSource,

  });
}

const mapDispatchToProps = dispatch => {
  return({
      
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);