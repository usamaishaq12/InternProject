import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors } from "~utils";
interface CustomCheckBoxProps {
  textStyleP?: any;
  textStyleC?: any;
  textStyleVP?: any;
  onPress?: () => void;
  check?: boolean;
}
const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  textStyleVP,
  textStyleP,
  textStyleC,
  onPress,
  check,
}) => {
  return (
    <View style={[styles.container, textStyleVP]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={onPress !== undefined ? false : true}
        // disabled={!onPress}
        style={[styles.checkboxContainer, textStyleP]}
      >
        {check && <Text style={[styles.checkbox, textStyleC]}>✔</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCheckBox;
