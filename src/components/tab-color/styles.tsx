import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";
const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // justifyContent: "space-around",
    backgroundColor: "white",
    // width: width(5),
    position: "relative",
  },
  borderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    borderTopWidth: 2,
  },
});
export default styles;
