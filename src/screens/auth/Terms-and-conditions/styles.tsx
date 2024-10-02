import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    paddingHorizontal: width(5),
  },
  container: {
    width: width(90),
    justifyContent: "space-evenly",
  },
  text1: {
    fontSize: width(4.6),
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.fullBlack,
    paddingVertical: height(1),
  },
  text2: {
    fontSize: width(3.8),
    fontFamily: FontFamily.Roboto_Regular,
    color: AppColors.fullBlack,
    paddingVertical: height(1),
  },
});
export default styles;
