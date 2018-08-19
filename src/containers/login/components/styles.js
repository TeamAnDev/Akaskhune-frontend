
const styles = {
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
      textAlign: 'right',
      color : 'rgb(57,57,57)'

    },
    inputFontStyle : {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: '200'
      },
    loginButton : {
       marginTop : 10
    },

  };
  export default styles;
