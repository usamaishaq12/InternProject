import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: width(12),
    height: width(4.5),
    width: width(4.5),
    // height: width(7),
    // width: width(7),
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    height: width(6),
    width: width(6),
    // height: width(6),
    // width: width(6),
    borderRadius: width(14),
    color: AppColors.grey,
  },
});

export default styles;
