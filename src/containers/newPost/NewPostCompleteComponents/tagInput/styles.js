import { StyleSheet } from "react-native";
import colors from "../../../../config/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },

  textInputContainer: {
    flex: 1,
    minWidth: 100,
    height: 32,
    margin: 4,
    borderRadius: 16,
    backgroundColor: "#ccc",
    borderColor: 'black',
  },

  textInput: {
    margin: 0,
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    height: 32,
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.87)",
    textAlign:'right'
  },

  tag: {
    justifyContent: "center",
    backgroundColor: colors.primaryColor,
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4
  },
  tagLabel: {
    fontSize: 13,
    color: "white"
  }
});
