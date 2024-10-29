import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";
const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginVertical: height(2),
    // marginTop: height(2),
    paddingVertical: width(0.4),
    width: width(35),
    borderRadius: width(5),
    borderWidth: width(0.3),
    padding: width(0.5),
    borderColor: AppColors.green,
  },

  innerView: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width(4.1),
    paddingVertical: width(1.1),
    backgroundColor: AppColors.green,
    borderRadius: width(5),
  },
  text2: {
    fontSize: 12,
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.white,
  },
  text: {
    fontSize: 12,
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.fullBlack,
  },
});
export default styles;
