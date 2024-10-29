import { StyleSheet } from "react-native";
import { FontFamily } from "~assets";
import AppColors from "~utils/app-colors";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.black,
    width: width(100),
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: width(3),
    borderBottomRightRadius: width(3),
    paddingBottom: height(0),
    // paddingTop: height(4),
    paddingVertical: height(2.65),
  },
  tab: {
    paddingHorizontal: width(5.9),
    paddingVertical: height(1),
    // backgroundColor: "yellow",
  },
  headertext: { width: "72%", alignItems: "center" },
  text: {
    fontSize: 15,
    fontFamily: FontFamily.Roboto_Bold,
  },

  bar: {
    height: width(0.7),
    backgroundColor: "red",
    borderTopLeftRadius: width(3),
    borderTopRightRadius: width(3),
  },
  contentContainerStyle: {
    borderBottomLeftRadius: width(3),
    borderBottomRightRadius: width(3),
    overflow: "hidden",
    // backgroundColor: "red",
  },
  flatlist: {
    // flexGrow: 0,
  },
});
export default styles;
