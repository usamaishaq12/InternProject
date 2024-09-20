import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    width: width(100),
  },
  viewContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  mainHeaderText: {
    color: AppColors.fullBlack,
    fontFamily: FontFamily.Roboto_Bold,
    width: width(90),
    paddingVertical: height(3.1),
  },
  otpContainer: {
    width: "84%",
    height: height(8),
    marginBottom: height(4),
  },

  underlineStyleBase: {
    borderColor: AppColors.otpBorder,
    borderRadius: width(4),
    borderWidth: width(0.3),
    width: width(15),
    height: width(15),
  },
  underlineStyleHighlightBase: {
    color: AppColors.black,
    fontSize: height(3),
  },

  buttonContainer: { marginBottom: height(6.5) },
  footerTextStyle: { marginBottom: height(1.3) },
  modalText: { textAlign: "center" },
});

export default styles;
