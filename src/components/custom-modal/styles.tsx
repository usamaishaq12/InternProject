import { Platform, StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    backgroundColor: AppColors.white,
    width: width(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: height(5),
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalText: {
    fontSize: width(6.1),
    fontFamily: FontFamily.Roboto_Bold,
    width: width(80),
    marginBottom: height(6),
    color: AppColors.fullBlack,
  },
});
export default styles;
