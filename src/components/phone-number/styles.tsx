import { StyleSheet } from "react-native";
import FontFamily from "~assets/fonts";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  phoneFieldView: {
    width: width(90),
    height: height(7.69),
    // marginVertical: width(1),
    backgroundColor: AppColors.green,
    borderBottomWidth: width(0.3),
    borderBottomColor: AppColors.lightGrey,
    justifyContent: "center",
  },
  phoneText: {
    fontFamily: FontFamily.Roboto_Regular,
    color: AppColors.snowGrey,
  },
  phoneContainer: {
    flex: 1,
    width: "80%",
    height: height(5),
    backgroundColor: AppColors.transparent,
    flexDirection: "row",
  },
  phoneTextContainer: {
    paddingVertical: width(0),
    backgroundColor: AppColors.transparent,
    paddingHorizontal: 3,
    marginHorizontal: -6.6,
  },
  phoneTextInput: {
    fontSize: width(4),
    color: AppColors.black,
    backgroundColor: AppColors.transparent,
    marginHorizontal: -11,
    alignItems: "center",
  },
  phoneCodeText: {
    fontSize: width(3.8),
    color: AppColors.black,
    backgroundColor: AppColors.transparent,
  },
  flagButton: {
    backgroundColor: AppColors.transparent,
    width: width(14),
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
});
export default styles;
