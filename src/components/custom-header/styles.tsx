import { Platform, StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.fullBlack,
    paddingVertical: height(2.65),
    width: width(100),
    borderBottomLeftRadius: height(2.2),
    borderBottomRightRadius: height(2.2),
    elevation: 6,
  },
  header: {
    width: "14%",
    alignItems: "center",
  },
  headertext: {
    width: "72%",
    alignItems: "center",
  },
});
export default styles;
