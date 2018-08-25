import React from 'react';
import {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import styles from './styles'

class Images extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.imageRow}>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/apple.jpg')}/>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/photo1.jpg')}/>
                </View>
                <View style={styles.imageRow}>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/balloons.jpg')}/>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/photo2.jpg')}/>
                </View>
                <View style={styles.imageRow}>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/buffon.jpg')}/>
                    <Image style={styles.image} source={require('C:/Akaskhune-frontend/images/photo3.jpg')}/>
                </View>
            </ScrollView>
        );
    }
}

export default Images;