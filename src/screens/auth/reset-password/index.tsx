import React, { Children, useState } from "react";
import { View } from "react-native";
import { FontFamily, Icons } from "~assets";
import {
  Button,
  CustomHeader,
  CustomModal,
  InputText,
  ScreenWrapper,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { BackArrow, OpenEye, TickCircle } from "~assets/SVG";

import ScreenNames from "~Routes/routes";
import backArrow from "~assets/SVG/backArrow";
import CustomText from "~components/text";
import GlobalMethods from "~utils/method";

export default function ResetPassword({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setChangeValue] = useState("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const validation = () => {
    if (!value || !value.includes("@") || !/\S+@\S+\.\S+/.test(value)) {
      GlobalMethods.errorMessage("Please enter correct email!");
    } else {
      toggleModal();
    }
  };

  return (
    <ScreenWrapper>
      <CustomHeader
        title="Reset Password"
        onBackPress={() => navigation.goBack(ScreenNames.RESETPASSWORD)}
      />
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <CustomText textStyles={styles.text}>
            Enter your email to reset your password
          </CustomText>
          <InputText
            label="Email"
            placeholder="Enter here"
            value={value}
            autoCapitalize={"none"}
            onChangeText={(text: string) => {
              console.log(`Text is ${text}`), setChangeValue(text);
            }}
            secureTextEntry={false}
            maxLength={40}
            placeholderTextColor={AppColors.lightGrey}
          />
          <Button
            variant="primary"
            buttonTextColor={AppColors.white}
            onPress={() => {
              validation();
              // toggleModal();
            }}
          >
            Send Password Reset Link
          </Button>
        </View>
        <CustomModal
          isVisible={modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          tickIcon={() => <TickCircle />}
          title=" A link has been sent to your email to reset your password"
          onBackdropPress={() => toggleModal()}
          onContinuePress={() => {
            toggleModal();
            navigation.navigate(ScreenNames.GETTINGLOGIN);
          }}
          label="Back to Login"
        />
      </View>
    </ScreenWrapper>
  );
}
