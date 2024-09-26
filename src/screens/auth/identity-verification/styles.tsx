import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.transparent,
    alignItems: "center",
    width: width(100),
  },
  viewContainer: {
    width: width(90),
    height: height(85),
    justifyContent: "space-evenly",
  },
  identityContainerStyle: {
    paddingVertical: height(12.5),
    width: width(90),
    borderRadius: width(3),
    backgroundColor: AppColors.lightGrey,
    marginBottom: height(2),
  },

  imageStyles: {
    paddingVertical: height(12.5),
    width: width(90),
    borderRadius: width(3),
  },
  iconViewStyle: {
    position: "absolute",
    // marginBottom: height(2),
  },
  smallText: {
    fontSize: width(3.8),
    fontFamily: FontFamily.Roboto_Bold,
    marginTop: height(3),
  },
  smallText2: {
    fontSize: width(3.8),
    fontFamily: FontFamily.Roboto_Bold,
  },

  footerButton: {
    marginTop: height(3.5),
  },
});

export default styles;
