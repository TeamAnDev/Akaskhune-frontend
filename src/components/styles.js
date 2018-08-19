import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    col: {
      flex: 1,
      flexDirection: 'column',
      // alignItems: 'center', // this will prevent TFs from stretching horizontal
      marginLeft: 7, marginRight: 7,
      // backgroundColor: MKColor.Lime,
    },
    textfield: {
      height: 28,  // have to do it on iOS
      marginTop: 32,
    },
    textfieldWithFloatingLabel: {
      height: 48,  // have to do it on iOS
      marginTop: 10,
    },
    inputFontStyle : {
        fontSize: 10,
        fontStyle: 'italic',
        fontWeight: '200'
      },
    FHButton : {
      

    },
    inputItem:{
      backgroundColor:'white', borderRadius:6, margin:7, height:55
    }

  });
  export default styles;
