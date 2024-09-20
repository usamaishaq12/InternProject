import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
  mainViewContainer: {
    justifyContent: "center",
    height: height(37),
    // backgroundColor: "red",
  },
  inputContainer: {
    marginTop: height(3),
    marginBottom: height(2),
    // backgroundColor: "yellow",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    marginBottom: height(2),
    // backgroundColor: "yellow",
  },

  textmainViewContainer: {
    width: width(42),
    // backgroundColor: "yellow",
  },
  iconContainer: {
    alignItems: "flex-start",
  },
});
export default styles;
