import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: "center",
    width: width(90),
    flexDirection: "row",
    borderBottomWidth: width(0.3),
    borderColor: AppColors.lightGrey,
  },
  viewContainer: {
    justifyContent: "center",
    height: height(7.69),
    width: "90%",
  },
  labelText: {
    fontFamily: "Roboto-regular",
    color: AppColors.snowGrey,
  },

  iconContainer: {
    width: "10%",
    alignItems: "center",
  },
  textInput: {
    color: AppColors.fullBlack,
    height: height(4.5),
    paddingVertical: 0,
  },
  textInput1: {
    color: AppColors.fullBlack,
    height: height(4.5),
    paddingVertical: 0,
  },
});
export default styles;
