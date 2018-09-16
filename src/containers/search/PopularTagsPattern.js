import React from 'react';
import {View, Dimensions} from 'react-native';
import PopularTag from './PopularTag';
const maxWidth = Dimensions.get("window").width * 250 / 280;
const maxHeight = Dimensions.get("window").height * 120 / 450;


const PopularTagsPattern = (props) => {
    return(
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <PopularTag photo_url={props.tags[0] ? props.tags[0].photo_url : null} tagName={props.tags[0] ? props.tags[0].name : null} width={maxWidth} height={maxHeight * 2 /3}/>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column'}}>
                    <PopularTag photo_url={props.tags[1] ? props.tags[1].photo_url : null} tagName={props.tags[1] ? props.tags[1].name : null} width={maxWidth / 2} height={maxHeight / 2}/>
                    <PopularTag photo_url={props.tags[2] ? props.tags[2].photo_url : null} tagName={props.tags[2] ? props.tags[2].name : null} width={maxWidth / 2} height={maxHeight / 2}/>
                </View>
                <PopularTag photo_url={props.tags[3] ? props.tags[3].photo_url : null} tagName={props.tags[3] ? props.tags[3].name : null} width={maxWidth / 2} height={maxHeight}/>
            </View>
            <PopularTag photo_url={props.tags[4] ? props.tags[4].photo_url : null} tagName={props.tags[4] ? props.tags[4].name : null} width={maxWidth} height={maxHeight * 2 / 3}/>
            <View style={{flexDirection:'row'}}>
                <PopularTag photo_url={props.tags[5] ? props.tags[5].photo_url : null} tagName={props.tags[5] ? props.tags[5].name : null} width={maxWidth / 2} height={maxHeight}/>
                <PopularTag photo_url={props.tags[6] ? props.tags[6].photo_url : null} tagName={props.tags[6] ? props.tags[6].name : null} width={maxWidth / 2} height={maxHeight}/>
            </View>
        </View>
    )
}

export default PopularTagsPattern