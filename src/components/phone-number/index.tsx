import React, { useRef, useState } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { SmallText } from "~components";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";
import { CountryCode, FlagButton } from "react-native-country-picker-modal";
import { ref } from "yup";

interface PhoneNumberComponentProps {
  defaultCode?: CountryCode;
  layout?: string;
  flagButton?: ViewStyle;
  placeholder?: string;
  containerStyle?: ViewProps;
  onChangeFormattedText?: (text: string) => void;
  ref?: any;
}

const PhoneNumberComponent: React.FC<PhoneNumberComponentProps> = ({
  flagButton,
  defaultCode,

  ref,
  placeholder,
  onChangeFormattedText,
  containerStyle,
  layout,
}) => {
  return (
    <View style={styles.phoneFieldView}>
      <SmallText size={3} textStyles={styles.phoneText}>
        Phone Number
      </SmallText>
      <PhoneInput
        ref={ref}
        withDarkTheme={false}
        defaultCode={defaultCode}
        layout="first"
        flagButtonStyle={[styles.flagButton, flagButton]}
        placeholder={placeholder}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.phoneTextContainer}
        textInputStyle={styles.phoneTextInput}
        codeTextStyle={styles.phoneCodeText}
        onChangeFormattedText={onChangeFormattedText}
      />
    </View>
  );
};

export default PhoneNumberComponent;
