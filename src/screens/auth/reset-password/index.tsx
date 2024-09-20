import React, { Children, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ViewComponent,
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
import backArrow from "~assets/SVG/backArrow";
import CustomText from "~components/text";

export default function ResetPassword({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setChangeValue] = useState("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
            maxLength={40}
            numberOfLines={2}
            placeholderTextColor={AppColors.lightGrey}
          ></InputText>
          <Button
            variant="primary"
            buttonTextColor={AppColors.white}
            // onPress={() => toggleModal()} another way
            onPress={toggleModal}
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
          onBackButtonPress={() => navigation.goBack()}
          label="Back to Login"
        />
      </View>
    </ScreenWrapper>
  );
}
