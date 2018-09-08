import {StyleSheet, Dimensions} from 'react-native';

const trashModalWidth = Dimensions.get("window").width * 280 / 330;
const trashModalHeight = Dimensions.get("window").height / 6;
const imageWidth = Dimensions.get("window").width * 117 / 260;
const imageHeight = imageWidth;
const styles = StyleSheet.create({
    trashModal : {
        backgroundColor : 'white',
        width : trashModalWidth,
        height : trashModalHeight,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    modalContainer :{
        flexDirection:'column',
        width:'100%',
        alignItems : 'center',
        flex:1,
        justifyContent : 'center'
    },
    trashText : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    trashAnswerBox : {
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth : 1,
        borderColor : '#EFEFEF',
        height : '100%',
        flex :1
    },
    singleAnswerBox : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    answerBoxBorder : {
        borderLeftWidth : 1,
        borderColor : '#EFEFEF'
    },
    image : {
        justifyContent:'center',
        width:imageWidth,
        height:imageHeight
    },
    addButton : {
        position:'absolute',
        marginTop: Dimensions.get("window").height * 3 / 4,
        width : '100%'
    }
})

export default styles;