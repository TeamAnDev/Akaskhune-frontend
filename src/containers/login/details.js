import {Text, View, Image} from 'react-native'
import styles from './styles'
import React from 'react';

const Details = () => {
    return (
        <View style={{
            flex : 1,
            marginTop:80,
            // justifyContent : 'center',
            alignItems: 'center', 
        }}>
            <Image source={require('../../../assests/logo.jpg')} style={styles.logo}/>
            <Text style={styles.text}>عکاسخونه</Text>
        
        </View>
    )
} 

export default Details;