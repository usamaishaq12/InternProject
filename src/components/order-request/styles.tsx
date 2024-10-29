import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    width: width(91.5),
    height: height(21),
    borderRadius: width(3),
    borderWidth: width(0.3),
    borderColor: AppColors.avatarBackground,
    alignItems: "center",
  },
  machineView: {
    flexDirection: "row",
    width: width(85),
    alignItems: "center",
    marginVertical: width(2.6),
  },
  machineLogoStyle: { width: width(12), height: height(6) },
  machineTextView: { marginHorizontal: width(3) },
  machinetitleText: {
    fontSize: 15,
    color: AppColors.fullBlack,
    fontFamily: FontFamily.Roboto_Bold,
    marginVertical: height(0.3),
  },
  machineText: {
    fontSize: 12,
    color: AppColors.green,
    fontFamily: FontFamily.Roboto_Black,
  },
  pinView: {
    flexDirection: "row",
    width: width(83),
  },

  pintext: {
    fontSize: 12,
    width: width(82),
    fontFamily: FontFamily.Roboto_Regular,
    marginLeft: width(1),
  },
  declineButtonText: { color: AppColors.red },
  acceptButtonText: { color: AppColors.solidGreen },
  declineButtonContainer: {
    marginVertical: height(2),
    backgroundColor: AppColors.lightRed,
  },
  acceptButtonContainer: {
    marginVertical: height(2),
    backgroundColor: AppColors.lightGreen,
  },
  rowContainer: {
    flexDirection: "row",
    borderRadius: width(4),
    width: width(85),
    justifyContent: "space-between",
    paddingVertical: height(2),
  },
  declineBtn: {
    width: width(40),
    textAlign: "left",
    backgroundColor: AppColors.solidRed,
  },
  acceptBtn: {
    width: width(40),
    textAlign: "right",
    backgroundColor: AppColors.solidGreen,
  },
});
export default styles;
