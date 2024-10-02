import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: height(2),
  },
  chuckImage: {
    height: width(31),
    width: width(31),
    marginVertical: height(3.5),
  },
  text: {
    color: AppColors.white,
    fontSize: width(3),
    height: height(9.5),
    fontFamily: FontFamily.Roboto_Regular,
  },
});
export default styles;
