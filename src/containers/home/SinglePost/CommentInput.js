import React, { Component } from 'react'
import FHInput from '../../../components/FHInput';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';
import { Item, Input, Icon } from 'native-base';



const mainHeignt = Dimensions.get('window').height * 60/640;
const CommentInput = (props) => {
    const reply = props.isReplay ? 
    <View style={{ width: "100%", height: mainHeignt/2, backgroundColor: colors.meduimGrey , justifyContent:'center'}}>
        <Text style={{textAlign: 'right'}}>
            {props.replyName}
        </Text>
        <TouchableOpacity style={{position:"absolute", left:15}}>
            <Icon name="close" style={{fontSize: 18,}}/>
        </TouchableOpacity>
    </View>: null;
    return (
        <View>
        {reply}
        <View style={{ width: "100%", height: mainHeignt, backgroundColor: colors.grey, alignItems:'center', justifyContent:'center'}}>
           <Item regular style={{backgroundColor:'white', width:'88%', height: '70%', borderRadius:mainHeignt/7}}>
                <TouchableOpacity style={{}}>
                    <Text style={{padding:10, color:'black', fontWeight:'bold'}}>
                        ارسال
                    </Text>
                </TouchableOpacity>
                <Input style={{textAlign: 'right',}} onChangeText={()=>{}} placeholder="نظر خودت رو بگو"
                        placeholderTextColor={colors.blackGrey}/>
           </Item>
        </View>
        </View>
    )
}
export default CommentInput;
