import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    bottom: height(1),
    position: "absolute",
  },
  buttonContainer: {
    borderRadius: width(4),
    backgroundColor: AppColors.white,
    width: width(85),
    height: height(15),
    justifyContent: "space-evenly",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },

  cancelBtn: {
    marginTop: height(1.5),
    alignSelf: "center",
    width: width(85),
    height: height(6),
    justifyContent: "center",
    borderRadius: width(4),
    backgroundColor: "white",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: height(1.6),
    fontFamily: FontFamily.Roboto_Bold,
    color: AppColors.fullBlack,
  },
  line: {
    // width: "100%",
    // alignSelf: "center",
    // backgroundColor: AppColors.fullBlack,
    // height: 0.5,
  },
});
export default styles;
