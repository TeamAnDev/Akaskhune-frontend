import React from 'react';
import {Component} from 'react';
import  {Icon, Root} from 'native-base';
import colors from '../../config/colors';
import {TouchableHighlight, View} from 'react-native';
import { Dimensions, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {navigate} from '../../../NavigationService';
import { PermissionsAndroid } from 'react-native';
const SIZE = Dimensions.get("window").height * 87/ 1000;

async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]
          ,
        {
          'title': 'دسترسی به دوربین',
          'message': 'برنامه‌ی عکاسخانه برای استفاده از دوربین به دسترسی دوربین نیاز دارد. ' +
                     'لطفا اجازه‌ی استفاده از دوربین را بدهید.'
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
export default class PlusButton extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        let  BOTTOM = this.props.heightOfTabBar - SIZE/2
       if(isIphoneX())
       {
           BOTTOM = BOTTOM + getStatusBarHeight();
           
       }
        return(
           
        <TouchableHighlight
            onPress={()=>{requestCameraPermission().then(()=> navigate('NewPost'))}}
            underlayColor = {colors.accentColorOver}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: SIZE,
                height: SIZE,
                borderRadius: SIZE / 2,
                backgroundColor: colors.accentColor,
                position : "absolute",
                bottom:BOTTOM,
                alignSelf:"center" ,
                zIndex : 100
            }}>
            
                <Icon type="Feather" name="plus"  style={{color:"#F8F8F8", fontSize: 35,zIndex:80}}/>
            
        </TouchableHighlight>
        )
    }
}