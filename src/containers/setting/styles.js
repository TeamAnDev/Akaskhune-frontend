import {StyleSheet, Dimensions} from 'react-native';
const marginTopOfCameraSelect = Dimensions.get("window").height * 3 / 100 ;
const marginBottomOfCameraSelect = Dimensions.get("window").height * 3 / 100 ;
const styles = StyleSheet.create({
    listItem : {
        flex:1,
        justifyContent:'space-between', 
        flexDirection:'row-reverse', 
        padding:20, 
        borderWidth:1,
        borderColor:'#EFEFEF',
        alignItems:'center'
    },
    cameraView : {
        marginTop : marginTopOfCameraSelect,
        marginBottom : marginBottomOfCameraSelect,
    }
});

export default styles;