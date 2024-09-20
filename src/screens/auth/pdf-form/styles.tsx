import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.transparent,
    alignItems: "center",
    width: width(100),
    justifyContent: "flex-end",
  },
  viewContainer: {
    // width: width(90),
    height: height(85),
    justifyContent: "space-evenly",
    // backgroundColor: "yellow",
  },
  //   zipCodeContainer: {},
  //   identityContainerStyle: {
  //     // justifyContent: "center",
  //     paddingVertical: height(12.5),
  //     width: width(90),
  //     borderRadius: width(3),
  //     backgroundColor: AppColors.lightGrey,
  //     // alignItems: "center",
  //     marginBottom: height(2),
  //   },

  //   imageStyles: {
  //     paddingVertical: height(12.5),
  //     width: width(90),
  //     borderRadius: width(3),
  //     marginTop: height(7),
  //   },
  //   iconViewStyle: {
  //     position: "absolute",
  //     color: AppColors.lightGrey,
  //     backgroundColor: AppColors.lightGrey,
  //   },
  //   smallText: {
  //     fontSize: width(3.8),
  //     fontFamily: FontFamily.Roboto_Bold,
  //   },
  //   smallText2: {
  //     fontSize: width(3.8),
  //     fontFamily: FontFamily.Roboto_Bold,
  //   },
  footerButtonContainer: {
    backgroundColor: AppColors.white,
    width: "100%",
    borderTopLeftRadius: width(7.5),
    borderTopRightRadius: width(7.5),
    paddingVertical: height(3),
    alignItems: "center",
  },
  footerButton: {
    marginBottom: height(3.5),
  },
  rowContainer: {
    flexDirection: "row",

    borderRadius: width(4),
    width: width(85),
    justifyContent: "space-between",
  },
  editButton: {
    width: width(40),
    textAlign: "left",
    marginBottom: height(3.5),
  },
  doneButton: {
    width: width(40),
    textAlign: "right",
    marginBottom: height(3.5),
  },
});

export default styles;
