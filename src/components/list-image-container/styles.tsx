import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainView: {
    height: width(28),
    width: width(28),
    borderRadius: width(4),
    backgroundColor: AppColors.lightGrey,
  },
  imageStyles: {
    height: width(28),
    width: width(28),
    borderRadius: width(4),
    backgroundColor: AppColors.lightGrey,
  },

  deleteIcon: {
    position: "absolute",
    marginHorizontal: width(20),
    marginVertical: height(1),
  },
});

export default styles;
