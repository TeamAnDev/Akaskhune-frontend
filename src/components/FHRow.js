import React from 'react';
import {View, Image} from 'react-native';
import styles from '../containers/profile/styles';

const FHRow = (props) => {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
            <Image style={styles.image} source={props.leftImage}/>
            <Image style={styles.image} source={props.rightImage}/>
        </View>
    );
}

export default FHRow;