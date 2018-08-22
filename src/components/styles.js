import {StyleSheet, Dimensions} from 'react-native';

const heightOfInputAndButton = Dimensions.get("window").height * 8/ 100 > 55 ? 55 :Dimensions.get("window").height * 8/ 100;
const widthOfInputAndButton = "85%";
const heightOfTextArea = Dimensions.get("window").height * 30/ 100 > 105 ? 105 :Dimensions.get("window").height * 8/ 100;
const styles = StyleSheet.create({
    col: {
      flex: 1,
      flexDirection: 'column',
      // alignItems: 'center', // this will prevent TFs from stretching horizontal
      marginLeft: 7, marginRight: 7,
      // backgroundColor: MKColor.Lime,
    },
    FHButton : {
       margin : 7,
      height : heightOfInputAndButton,
      borderRadius: 10,
      width : widthOfInputAndButton,
      alignContent:"center",
      alignSelf: 'center',
      justifyContent:"center"
    },
    inputItem:{
      backgroundColor:'white', borderRadius:6, margin:7, height:heightOfInputAndButton
      , width:widthOfInputAndButton, alignSelf:"center",
    },
    textAreaItem:{
      backgroundColor:'white', borderRadius:6, margin:7, height:heightOfTextArea
      , width:widthOfInputAndButton, alignSelf:"center",
    }

  });
  export default styles;
