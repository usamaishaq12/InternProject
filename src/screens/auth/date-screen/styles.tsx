import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  calendar: {
    marginTop: height(2),
  },
  mainViewContainer: { flex: 1, backgroundColor: AppColors.white },
});

export default styles;
