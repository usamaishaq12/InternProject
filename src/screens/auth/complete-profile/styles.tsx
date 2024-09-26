import { StyleSheet } from "react-native";
import FontFamily from "~assets/fonts";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingView: {
    marginTop: height(4),
    marginBottom: height(2),
    width: "90%",
  },
  fieldContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    fontSize: width(6.1),
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.black,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    marginBottom: height(2),
  },
  textmainViewContainer: {
    width: width(42),
  },
  serviceViewContainer: { marginVertical: height(1) },

  modalContainer: {
    backgroundColor: "red",
  },
  modalText: {
    fontSize: width(6.1),
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.black,
    textAlign: "center",
  },
  footerButton: {
    backgroundColor: AppColors.transparent,
    height: height(11),
  },
});

export default styles;
