import {StyleSheet, Dimensions} from 'react-native';
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
        borderRadius : 10
    },
    imageRow : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 10
    } ,
    editButton : {
        marginTop : 15,
        marginLeft : 10,
        fontWeight:'bold',
        color: 'white'
    },
    username : {
        marginTop : 15,
        color: 'white'
    }
})

export default styles;