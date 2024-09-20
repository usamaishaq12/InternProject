import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
  mainViewContainer: {
    justifyContent: "center",
    height: height(37),
  },
  inputContainer: {
    marginTop: height(3),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: width(87),
    marginBottom: height(4),
  },
  text2: {
    color: AppColors.fullBlack,
    fontSize: width(3.1),
    fontFamily: "Roboto-regular",
    paddingVertical: height(1.5),
  },
  text3: {
    color: AppColors.fullBlack,
    fontSize: width(3.1),
    fontFamily: "Roboto-Bold",
  },
});
export default styles;
