import React, { Component } from 'react';
import {View, ImageBackground, Dimensions,  TextInput} from 'react-native';
import FHTextarea from '../../../components/FHTextArea';
import colors from '../../../config/colors';
import Tags from './tagInput/index';
import {Icon} from 'native-base';
const TagAndLocationInputs = (props) =>(
    <View style={{}}>
                <View  style={[{ flexDirection:'row', justifyContent:'center', alignItems : 'center', backgroundColor:colors.grey}]}>
                    
                    <View style={{flex:11}}><TextInput
                        style={{ borderRadius:3, width:"100%", fontSize: 13,}}
                            value="موقعیت"
                    /></View>
                    <View style={{flex:1}}><Icon style={{color:colors.blackGrey}} name="map-pin" type="Feather"/></View>
                </View>
                <Tags
                    onChangeTags={props.changeTags}
                    onTagPress={(index, tagLabel, event, deleted) =>
                    console.warn(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                    }
                    containerStyle={{ justifyContent: "center" }}
                    inputStyle={{  borderRadius:3, backgroundColor:colors.grey}}
                    placeholder="اضافه کردن تگ"
                />
    </View>
)

export default TagAndLocationInputs;