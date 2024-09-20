import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: { paddingVertical: height(2) },
  cameraContainer: {
    justifyContent: "center",
    height: width(33),
    width: width(33),
    borderRadius: width(19),
    backgroundColor: AppColors.lightGrey,
    alignItems: "center",
  },
  imageStyles: {
    width: width(33),
    height: width(33),
    borderRadius: width(19),
    marginBottom: height(7),
  },
});

export default styles;
