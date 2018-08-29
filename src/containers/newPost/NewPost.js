import React from 'react';
import {Component} from 'react';
import {View, Dimensions ,Text} from 'react-native';
import FHHeader from '../../components/FHHeader'
import FHButton from '../../components/FHButton'
import CameraPriview from './CameraPreview';
import GalleryPreview from './GalleryPreview';
import colors from '../../config/colors';
const bottomOfButton = Dimensions.get("window").height * 3 / 100;
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
                        <GalleryPreview/>
                    </View>
                    <View style={{width:"100%", position:"absolute", bottom:bottomOfButton}}>
                        <FHButton title="مرحله بعدی" onPress={()=>{}} disabled = {true}/>
                    </View>
                </View>
            </View>
        )
    }
}