import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: width(0.3),
    height: height(7.69),
    width: width(90),
    borderColor: AppColors.lightGrey,
  },
  titleText: {
    color: AppColors.snowGrey,
    fontFamily: FontFamily.Roboto_Regular,
  },
  flatListContainer: { flex: 1 },
  flatListViewStyle: {
    marginVertical: width(0.7),
    width: width(28),
    height: height(4.5),
    alignItems: "center",
    backgroundColor: AppColors.green,
    justifyContent: "center",
    marginHorizontal: width(0.4),
    borderRadius: width(7),
  },
  flatListText: {
    fontSize: width(3.8),
    color: AppColors.fullBlack,
    fontFamily: FontFamily.Roboto_Regular,
  },
  svgcontainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: AppColors.transparent,
  },
});

export default styles;
