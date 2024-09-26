import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors } from "~utils";
import { TickCheck } from "~assets/SVG";
interface CustomCheckBoxProps {
  textStyleP?: any;
  textStyleC?: any;
  textStyleVP?: any;
  onPress?: () => void;
  check?: boolean;
  icon?: boolean;
  upperIcon?: boolean;
  lowerIcon?: boolean;
}
const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  textStyleVP,
  textStyleP,
  textStyleC,
  onPress,
  check,
  upperIcon,
  lowerIcon,
}) => {
  return (
    <View style={[styles.container, textStyleVP]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={onPress !== undefined ? false : true}
        // disabled={!onPress}
        style={[
          upperIcon
            ? styles.smallCheckBoxContainer
            : styles.bigCheckBoxContainer,
          textStyleP,
        ]}
      >
        {/* {check && (
          <Text style={[textStyleC]}>
            <TickCheck />
          </Text>
        )} */}
        {check && lowerIcon ? (
          <Text style={[textStyleC]}>
            <TickCheck width={13} height={16} />
          </Text>
        ) : (
          check && (
            <Text style={[textStyleC]}>
              <TickCheck />
            </Text>
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCheckBox;
