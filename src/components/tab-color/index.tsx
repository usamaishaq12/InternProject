import React from "react";
import { View } from "react-native";
import styles from "./styles";

export interface TabColorProps {
  index: number;
}

const TabColor: React.FC<TabColorProps> = ({ index }) => {
  let borderColor;

  if (index === 0) {
    borderColor = "green";
  } else if (index === 1) {
    borderColor = "blue";
  } else if (index === 2) {
    borderColor = "orange";
  } else {
    borderColor = "transparent";
  }
  return (
    <View style={styles.container}>
      <View style={[styles.borderTop, { borderTopColor: borderColor }]} />
    </View>
  );
};
export default TabColor;
