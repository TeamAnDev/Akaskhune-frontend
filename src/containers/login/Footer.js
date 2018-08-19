import {FHButton} from '../src/components'
import {View, StyleSheet} from 'react-native'
const Footer = () => {
    return (
        <View style={styles.container}>
            <FHButton title = 'ورود با حساب گوگل' onPress = {() => console.log("log in with google")}/>
            <Text style = {styles.text} onPress = {() => console.log("sign up")}>ثبت نام</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    text : {
        marginTop : 10
    }
})

export default Footer;