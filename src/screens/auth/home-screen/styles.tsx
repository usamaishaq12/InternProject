import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    width: width(100),
  },
  viewContainer: {
    width: width(90),
    height: height(85),
  },
  mapView: {
    width: width(90),
    height: height(26),
    borderRadius: width(5),
    borderColor: AppColors.lightGrey,
    borderWidth: width(0.3),
    backgroundColor: AppColors.grey,
    marginVertical: height(2),
  },
  rowView: {
    paddingVertical: height(2),
    width: width(87),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  serviceOrderText: {
    color: AppColors.fullBlack,
    fontSize: 18,
    fontFamily: FontFamily.Roboto_Bold,
  },
  dateTitle: {
    paddingVertical: height(2),
    color: AppColors.fullBlack,
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: 18,
  },

  footerButton: {
    marginTop: height(3.5),
  },
});

export default styles;
