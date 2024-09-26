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

  bigCheckBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: width(12),
    height: width(6.5),
    width: width(6.5),
  },
  smallCheckBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: width(12),
    height: width(4.5),
    width: width(4.5),
  },
  smallCheckBox: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // // backgroundColor: "black",
    // // height: width(3),
    // // width: width(3),
    // borderRadius: width(14),
    // color: AppColors.grey,
  },
  bigCheckBox: {
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // backgroundColor: "black",
    // height: width(7),
    // width: width(7),
    // borderRadius: width(14),
    // color: AppColors.grey,
  },
});

export default styles;
