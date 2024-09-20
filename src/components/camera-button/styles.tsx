import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    height: width(28),
    width: width(28),
    borderRadius: width(4),
    backgroundColor: AppColors.lightGrey,
    alignItems: "center",
  },
});

export default styles;
