import {Text, View, Image} from 'react-native'
import {styles} from './styles'

const Details = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../src/containers/login/logo.jpg')} style={styles.logo}/>
            <Text style={styles.text}>عکاسخونه</Text>
        </View>
    )
} 