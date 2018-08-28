import {StyleSheet, Dimensions} from 'react-native'
import colors from '../../config/colors';
const cameraViewWidthAndHeight = Dimensions.get("window").width * 28 / 100 ;
const marginTopOfCameraSelect = Dimensions.get("window").height * 13 / 100 ;
const marginBottomOfCameraSelect = Dimensions.get("window").height * 3 / 100 ;
const styles = StyleSheet.create({
    cameraView : {
        marginTop : marginTopOfCameraSelect,
        marginBottom : marginBottomOfCameraSelect,
    },
    imageView : {
        width : cameraViewWidthAndHeight,
        height : cameraViewWidthAndHeight,
        borderRadius: cameraViewWidthAndHeight/2,
       
    },

})

export default styles;