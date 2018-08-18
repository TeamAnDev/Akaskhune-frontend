import {StyleSheet, Text, View, Image} from 'react-native'

const Details = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../src/containers/login/logo.jpg')} style={styles.logo}/>
            <Text style={styles.name}>عکاسخونه</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    logo : {
        width : 50,
        height : 50,
        borderRadius : 50
    },
    name : {
        marginTop : 10
    },
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'
    }
})