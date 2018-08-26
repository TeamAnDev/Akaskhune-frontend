import React from 'react';
import {Component} from 'react';
import  {Icon, Root} from 'native-base';
import colors from '../../config/colors';
import {TouchableHighlight, View} from 'react-native';
import { Dimensions, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
const SIZE = Dimensions.get("window").height * 87/ 1000;


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
            onPress={()=>{}}
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