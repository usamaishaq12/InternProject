import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "89.4%",
    marginTop: height(3),
  },
  settingView: {
    backgroundColor: AppColors.snowGrey,
    borderRadius: width(5),
    height: height(3.7),
    width: width(8),
    alignItems: "center",
    justifyContent: "center",
  },
  tickCircle: {
    backgroundColor: AppColors.white,
    height: height(2),
    width: width(4),
    borderRadius: width(4),
    position: "absolute",
    right: width(2),
    top: height(4),
  },
  ratingContainer: {
    width: width(40),
    alignItems: "center",
  },
  ratingText: { marginVertical: height(1) },
  rowMoneyContainer: { backgroundColor: "yellow" },
  moneyView: { backgroundColor: "red" },
});

export default styles;
