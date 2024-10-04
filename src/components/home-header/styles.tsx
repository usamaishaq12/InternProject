import { Platform, StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: "center",
    backgroundColor: AppColors.fullBlack,
    // paddingVertical: height(2),
    width: width(100),
    borderBottomLeftRadius: height(1.9),
    borderBottomRightRadius: height(1.9),
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "89%",
    alignItems: "center",
    paddingVertical: height(1.5),
  },
  logo: { height: width(9), width: width(13) },
  chat: { marginLeft: width(54) },
  notification: { marginRight: width(1) },
});
export default styles;
