import React, { Component } from 'react';
import {View, ImageBackground, Dimensions,  TextInput} from 'react-native';
import FHTextarea from '../../../components/FHTextArea';
import colors from '../../../config/colors';

const widthAndHeightOfImage = Dimensions.get("window").height * 30/ 100 > 105 ? 105 :Dimensions.get("window").height * 8/ 100;
const marginTopOfFirstRow = Dimensions.get('window').height * 21/640;

const TopInputs = (props) => (
<View style={{ flexDirection:'row', marginTop : marginTopOfFirstRow, marginEnd : marginTopOfFirstRow}}>
<View style={{flex:260}} >
    <FHTextarea
                //  value={}
                onTextChange = {props.changeCaption}
                text = "توضیحات عکس"
                style={{width:"95%", marginTop:0}}
                />
    </View>     
    <View style={{flex:123}} >
        <ImageBackground source={{uri : props.sourceImage}} 
        style={{backgroundColor : colors.grey, width : widthAndHeightOfImage, marginLeft : 8,
                height : widthAndHeightOfImage, borderRadius:widthAndHeightOfImage/11}}
        imageStyle = {{borderRadius:widthAndHeightOfImage/10}}>

        </ImageBackground>
    </View>           
</View>)
export default TopInputs;