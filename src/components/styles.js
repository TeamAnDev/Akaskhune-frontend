import {StyleSheet, Dimensions} from 'react-native';
import colors from  '../config/colors';
const heightOfInputAndButton = Dimensions.get("window").height * 8/ 100 > 55 ? 55 :Dimensions.get("window").height * 8/ 100;
const widthOfInputAndButton = "85%";
const heightOfTextArea = Dimensions.get("window").height * 30/ 100 > 105 ? 105 :Dimensions.get("window").height * 8/ 100;
const cameraViewWidthAndHeight = Dimensions.get("window").width * 28 / 100 ;
const marginTopOfCameraSelect = Dimensions.get("window").height * 13 / 100 ;
const marginBottomOfCameraSelect = Dimensions.get("window").height * 3 / 100 ;
const boardImageWidth = Dimensions.get("window").width / 3;
const boardImageHeight = boardImageWidth;
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
      borderColor: colors.grey, borderWidth: 2,
    },
    cameraView : {
      backgroundColor : colors.grey,
      width : cameraViewWidthAndHeight,
      height : cameraViewWidthAndHeight,
      borderRadius: cameraViewWidthAndHeight/2,
      // marginTop : marginTopOfCameraSelect,
      // marginBottom : marginBottomOfCameraSelect,
      alignItems: 'center',
      justifyContent : 'center',
  },
  imageView : {
      width : cameraViewWidthAndHeight,
      height : cameraViewWidthAndHeight,
      borderRadius: cameraViewWidthAndHeight/2,
     
  },
  contactItem : {
    flex:1,
    padding:20,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#EFEFEF'
  },
  contactButton : {
    width:100,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent : 'center',
    color : colors.accentColor
  },
  requested : {
    width:100,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : "#56000a"
  },
  peopleImage : {
    width:40,
    height:40,
    borderRadius:20
  },
  boardImage : {
      width : boardImageWidth,
      height : boardImageHeight,
      borderRadius : 10,
      margin : 8,
      backgroundColor : colors.blackGrey,
  }

  });
  export default styles;
