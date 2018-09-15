import {StyleSheet, Dimensions} from 'react-native'
const marginTopOfLogo = Dimensions.get("window").height * 135 / 1000 ;
const styles = StyleSheet.create({
    logo : {
        width : 50,
        height : 50,
        borderRadius : 25
    },
    text : {
       paddingTop: 17,
       color:'white'
    },
    container : {
        flex : 1,

        // justifyContent : 'center',
        alignItems: 'center', 
    },
    logoContainer :{
        flex : 1,
        marginTop:marginTopOfLogo,
        // justifyContent : 'center',
        alignItems: 'center', 
    }
})

export default styles;