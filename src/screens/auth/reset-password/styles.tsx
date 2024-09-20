import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    height: height(38),
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: width(6.1),
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.fullBlack,
  },
});
export default styles;
