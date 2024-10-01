import { View, ViewProps, ViewStyle } from "react-native";
import { SmallText } from "~components";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";
import { CountryCode, FlagButton } from "react-native-country-picker-modal";

import { forwardRef, useRef } from "react";
import React from "react";

interface PhoneNumberComponentProps {
  defaultCode?: CountryCode;
  layout?: string;
  flagButton?: ViewStyle;
  placeholder?: string;
  containerStyle?: ViewProps;
  onChangeFormattedText?: (text: string) => void;
}

export const PhoneNumberComponent: React.ForwardRefRenderFunction<
  PhoneInput,
  PhoneNumberComponentProps
> = (
  {
    flagButton,
    defaultCode,
    placeholder,
    onChangeFormattedText,
    containerStyle,
    layout,
  },
  ref
) => {
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

export default forwardRef<PhoneInput, PhoneNumberComponentProps>(
  PhoneNumberComponent
);
