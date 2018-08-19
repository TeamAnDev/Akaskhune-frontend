import {FHButton} from '../src/components'
import {View} from 'react-native'
import {styles} from './styles'

const Footer = () => {
    return (
        <View style={styles.container}>
            <FHButton title = 'ورود با حساب گوگل' onPress = {() => console.log("log in with google")}/>
            <Text style = {styles.text} onPress = {() => console.log("sign up")}>ثبت نام</Text>
        </View>
    )
}

export default Footer;