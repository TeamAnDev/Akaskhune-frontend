import {Text, View, Image} from 'react-native'
import styles from './styles'
import React from 'react';

const Details = () => {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
            <Text style={styles.text}>عکاسخونه</Text>
        
        </View>
    )
} 

export default Details;