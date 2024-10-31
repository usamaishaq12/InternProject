import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColors.transparent,
    // backgroundColor: AppColors.red,
    paddingTop: height(5),
  },
  innerContaner: {
    alignItems: "center",
    height: height(30),
  },
  chuckImage: {
    height: width(31),
    width: width(31),
    marginVertical: height(4),
  },
  text: {
    fontSize: width(6.1),
    fontFamily: "Roboto-Bold",
    color: AppColors.black,
  },
  inputViewContainer: { marginVertical: height(2) },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width(90),
    paddingVertical: height(3),
    marginBottom: height(1.5),
  },
  checkBoxStyle: { marginLeft: width(1) },
  text2: {
    fontSize: width(3),
    color: AppColors.black,
    fontFamily: FontFamily.Roboto_Regular,
    paddingRight: width(34),
  },
  text3: {
    color: AppColors.black,
    fontSize: width(3),
    fontFamily: FontFamily.Roboto_Bold,
  },
  loginButtonContainer: { height: height(20) },
  textBottom: {
    color: AppColors.fullBlack,
    fontSize: width(3),
    fontFamily: FontFamily.Roboto_Regular,
    textAlign: "center",
    marginBottom: height(1.5),
  },
  lowerButton: {
    // marginBottom: height(7),
  },
  textColor: {
    color: AppColors.black,
  },

  errorEmailStyle: { fontSize: 10, color: "red", backgroundColor: "yellow" },
  errorPasswordStyle: { fontSize: 10, color: "red", backgroundColor: "yellow" },
  errorRememberMeStyle: { fontSize: 10, color: "red" },
});
export default styles;
