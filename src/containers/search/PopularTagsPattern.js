import React from 'react';
import {View, Dimensions} from 'react-native';
import PopularTag from './PopularTag';
const maxWidth = Dimensions.get("window").width * 250 / 280;
const maxHeight = Dimensions.get("window").height * 120 / 450;


const PopularTagsPattern = (props) => {
    return(
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <PopularTag tagName={props.tags[0].name} width={maxWidth} height={maxHeight * 2 /3}/>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column'}}>
                    <PopularTag tagName={props.tags[1].name} width={maxWidth / 2} height={maxHeight / 2}/>
                    <PopularTag tagName={props.tags[2].name} width={maxWidth / 2} height={maxHeight / 2}/>
                </View>
                <PopularTag tagName={props.tags[3].name} width={maxWidth / 2} height={maxHeight}/>
            </View>
            <PopularTag tagName={props.tags[4].name} width={maxWidth} height={maxHeight * 2 / 3}/>
            <View style={{flexDirection:'row'}}>
                <PopularTag tagName={props.tags[5].name} width={maxWidth / 2} height={maxHeight}/>
                <PopularTag tagName={props.tags[6].name} width={maxWidth / 2} height={maxHeight}/>
            </View>
        </View>
    )
}

export default PopularTagsPattern