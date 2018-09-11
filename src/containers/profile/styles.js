import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';
const imageWidth = Dimensions.get("window").width * 117 / 260;
const imageHeight = imageWidth;
const styles = StyleSheet.create({
    tab : {
        backgroundColor:'white',
        borderColor:'#EFEFEF',
        borderWidth:1
    },
    text : {
        color: '#393939'
    },
    image : {
        width : imageWidth,
        height : imageHeight,
        borderRadius : 10,
        backgroundColor : colors.blackGrey
    },
    imageRow : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 10
    } ,
    editButton : {
        fontWeight:'bold',
        color: 'white'
    },
    username : {
        color: 'white'
    }
})

export default styles;