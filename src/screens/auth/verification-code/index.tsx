import React, { Children, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ViewComponent,
  ScrollView,
} from "react-native";
import { FontFamily, Icons } from "~assets";
import {
  Button,
  CustomHeader,
  CustomModal,
  InputText,
  LargeText,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { BackArrow, OpenEye, TickCircle } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import CustomText from "~components/text";

export default function VerificationCode({ navigation }) {
  const [text, setChangeText] = useState("");
  const [code, setChangeCode] = useState("");
  const [modal, setModal] = useState(false);
  const [nodal, setNodal] = useState(false);

  const handleOtpSubmit = () => {
    const body = { text, code };
    console.log(body);
    navigation.navigate(ScreenNames.UPLOADPICTURES);
  };

  return (
    <ScreenWrapper>
      <CustomHeader
        title="Enter Verification Code"
        onBackPress={() => navigation.navigate(ScreenNames.COMPLETEPROFILE)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <LargeText
            // containerStyles={styles.viewHeaderText}
            textStyles={styles.mainHeaderText}
            children={"Please enter the code we sent to your phone number"}
          />
          <OTPInputView
            style={styles.otpContainer}
            pinCount={4}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighlightBase}
            onCodeChanged={(text) => {
              console.log(`Code is${text}`), setChangeText(text);
            }}
            onCodeFilled={(code) => {
              console.log(`Code is${code}`), setChangeCode(code);
            }}
          />
          <Button
            containerStyle={styles.buttonContainer}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Verify"}
            onPress={() => setModal(true)}
          />
          <SmallText
            textStyles={styles.footerTextStyle}
            size={3.8}
            children={"Didn't receive the code?"}
          />
          <Button
            variant="secondary"
            buttonTextColor={AppColors.fullBlack}
            children={"Send Again"}
            onPress={() => setNodal(!nodal)}
          />
          <CustomModal
            textStyle={styles.modalText}
            isVisible={modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            title="Your account has been verified"
            label="Continue"
            backdropOpacity={0.3}
            onBackButtonPress={() => {
              setModal(!modal);
              handleOtpSubmit();
            }}
          />
          <CustomModal
            textStyle={styles.modalText}
            isVisible={nodal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            title="We sent you a new 4 digit code to your phone number"
            label="Continue"
            backdropOpacity={0.3}
            onBackButtonPress={() => setNodal(!nodal)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
