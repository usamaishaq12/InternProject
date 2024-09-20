import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    borderRadius: width(4),
    paddingVertical: height(2),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width(85),
  },
  primaryContainer: {
    backgroundColor: AppColors.fullBlack,
    color: AppColors.white,
  },
  secondaryContainer: {
    backgroundColor: AppColors.grey,
  },
  greenContainer: {
    backgroundColor: AppColors.green,
  },
  blackContainer: {
    backgroundColor: AppColors.primary,
  },
  disableContainer: {
    backgroundColor: AppColors.wihte5,
    color: AppColors.fullBlack,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
