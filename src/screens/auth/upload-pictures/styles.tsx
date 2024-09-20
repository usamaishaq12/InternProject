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
    justifyContent: "space-between",
  },
  viewContainer: {
    width: width(90),
    height: height(97),
    // backgroundColor: "green",
  },

  mainHeaderText: {
    color: AppColors.fullBlack,
    fontFamily: FontFamily.Roboto_Bold,
    width: width(90),
    paddingVertical: height(3.1),
  },
  smallText: {
    fontSize: width(3.8),
    fontFamily: FontFamily.Roboto_Bold,
  },
  smallText2: {
    fontSize: width(3.8),
    fontFamily: FontFamily.Roboto_Bold,

    paddingBottom: height(3),
  },
  cameraAndTextContainer: {
    alignItems: "center",
    marginBottom: height(6.5),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height(1),
  },
  innerCheckText: {
    fontFamily: FontFamily.Roboto_Regular,
    marginLeft: width(3),
  },
  contentContainerStyle: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },
  viewListContainerStyle: {
    marginHorizontal: width(1),
    marginBottom: height(1),
  },
  listHeaderStyle: { marginHorizontal: width(1), marginBottom: height(1) },
  footerButton: {
    marginBottom: height(3.8),
    marginTop: height(2),
  },
});

export default styles;
