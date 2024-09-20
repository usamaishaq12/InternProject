import React, { useRef, useState } from "react";
import { View } from "react-native";
import { SmallText } from "~components";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";

const PhoneNumber = () => {
  const phoneInput = useRef(null);
  return (
    <View style={styles.phoneFieldView}>
      <SmallText size={3} textStyles={styles.phoneText}>
        Phone Number
      </SmallText>
      <PhoneInput
        ref={phoneInput}
        withDarkTheme={false}
        defaultCode="US"
        layout="first"
        flagButtonStyle={styles.flagButton}
        placeholder=" Phone number"
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.phoneTextContainer}
        textInputStyle={styles.phoneTextInput}
        codeTextStyle={styles.phoneCodeText}
        onChangeFormattedText={(text) => text}
      />
    </View>
  );
};

export default PhoneNumber;
