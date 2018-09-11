import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../containers/profile/styles';
import {navigate} from '../../NavigationService';

const FHRow = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
            <TouchableOpacity onPress = {() => navigate('SinglePost', {id :props.leftImage.id})}>
                <ImageBackground style={styles.image} source={props.leftImage} imageStyle={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigate('SinglePost', {id :props.rightImage.id})}>
                <ImageBackground style={styles.image} source={props.rightImage} imageStyle={styles.image}/>
            </TouchableOpacity>
            
        </View>
    );
}

export default FHRow;