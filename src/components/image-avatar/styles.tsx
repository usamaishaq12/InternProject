import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: { paddingVertical: height(2) },
  cameraContainer: {
    justifyContent: "center",
    height: width(32.5),
    width: width(32.5),
    borderRadius: width(19),
    backgroundColor: AppColors.avatarBackground,
    alignItems: "center",
  },
  imageStyles: {
    width: width(33),
    height: width(33),
    borderRadius: width(19),
  },
  tickCircle: {
    alignItems: "center",
    backgroundColor: AppColors.white,
    height: height(2),
    width: width(3),
    borderRadius: width(4),
    position: "absolute",
    zIndex: 1,
    right: width(2),
    top: height(4),
  },
});

export default styles;
