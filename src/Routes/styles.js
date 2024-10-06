import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";
const styles = StyleSheet.create({
  imageTabBarView: {
    width: width(14),
    height: height(4.8),
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: AppColors.solidGreen,
    opacity: 1,
  },
  imageTabBarView2: {
    width: width(14),
    height: height(4.8),
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 0,
    opacity: 0.5,
  },
});
export default styles;
