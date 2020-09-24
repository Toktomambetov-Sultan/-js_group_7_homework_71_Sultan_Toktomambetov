import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 0 : 25,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  display: {
    width: "100%",
    fontSize: 26,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonsBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  button: {
    width: "25%",
    padding: 5,
    borderRadius: 10,
  },
  buttonInner: {
    borderWidth: 1,
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 28,
  },
});
export default styles;
