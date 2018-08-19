import React from 'react';
import FHButton from '../../components/FHButton';
import {View, Text} from 'react-native'
import styles from './styles'


const LoginFooter = (props) =>  (
        <View style={styles.container}>
            <View style={{flexDirection:"row", flex:1}}>
            <View style={{flex:1}} >
                    </View>
                    <View style={{flex:10}} >
                          <FHButton title = 'ورود با حساب گوگل' onPress = {() => console.warn("log in with google")}/>
                             <Text style = {{alignSelf: 'center', marginTop:10}} onPress = {() => console.warn("sign up")}>ثبت نام</Text>
                    </View>
                    <View style={{flex:1}} >
                    </View>
               
            </View>
           
        </View>
    )

export default LoginFooter;