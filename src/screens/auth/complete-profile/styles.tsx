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
  phoneFieldView: {
    width: width(90),
    height: height(7.69),
    borderBottomWidth: width(0.3),
    borderBottomColor: AppColors.lightGrey,
    justifyContent: "center",
    marginBottom: height(2),
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
