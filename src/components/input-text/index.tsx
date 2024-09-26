import React from "react";
import { TextInput, View, TextStyle, TextInputProps } from "react-native";
import styles from "./styles";
import AppColors from "~utils/app-colors";
import { SmallText } from "~components/text";
import { InputTextProps } from "./types";
import { FontFamily } from "~assets";
import { OpenEye } from "~assets/SVG";

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  placeholderTextColor = AppColors.snowWhite,
  secureTextEntry = true,
  value,
  autoCapitalize = "none",
  onChangeText,
  maxLength = 40,
  numberOfLines = 1,
  autoFocus = false,
  textStyle,
  textStyleView,
  mainViewContainer,
  icon = () => {},
  iconContainer,
  pointerEvents = "auto",
  keyboardType,
}) => (
  <View style={[styles.mainViewContainer, mainViewContainer]}>
    <View style={[styles.viewContainer, textStyleView]}>
      <SmallText size={3} textStyles={styles.labelText}>
        {label}
      </SmallText>
      <TextInput
        style={[icon() ? styles.textInput1 : styles.textInput, textStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        pointerEvents={"none"}
        onChangeText={onChangeText}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
    </View>
    <View style={[styles.iconContainer, iconContainer]}>{icon()}</View>
  </View>
);

export default InputText;
