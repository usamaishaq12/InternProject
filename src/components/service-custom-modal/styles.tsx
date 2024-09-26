import { ServerContainer } from "@react-navigation/native";
import App from "App";
import { StyleSheet } from "react-native";
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
    paddingBottom: height(5.5),
    paddingTop: height(3),
    maxHeight: height(75),
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.black,
    marginBottom: height(2),
  },
  searchInput: {
    fontSize: 15,
    width: "90%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: AppColors.extraGrey,
    borderRadius: 10,
    backgroundColor: AppColors.extraGrey,
  },
  serviceContainer: {
    width: width(88),
    flexDirection: "row",
    alignItems: "center",
  },
  serviceItem: {
    width: width(100),
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: height(1),
    borderTopColor: AppColors.borderColorGrey,
    borderTopWidth: 1,
  },
  serviceText: {
    fontSize: 16,
    fontFamily: FontFamily.Roboto_Regular,
    color: AppColors.black,
    paddingHorizontal: 20,
  },
  button: { marginTop: height(2) },
});

export default styles;
