import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../containers/profile/styles';
import {push} from '../../NavigationService';

const FHRow = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
            <TouchableOpacity onPress = {() => push('SinglePost', {id :props.leftImage.id})}>
                <ImageBackground style={styles.image} source={props.leftImage} imageStyle={{borderRadius : 10}}/>
            </TouchableOpacity>
            {props.rightImage.uri ? <TouchableOpacity onPress = {() => push('SinglePost', {id :props.rightImage.id})}>
                <ImageBackground style={styles.image} source={props.rightImage} imageStyle={{borderRadius : 10}}/>
            </TouchableOpacity> : null}
           
            
        </View>
    );
}

export default FHRow;