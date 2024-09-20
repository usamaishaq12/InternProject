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
  CustomCheckBox,
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

export default function CreateAccount({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setChangeEmail] = useState("");
  const [password, setChangePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleCheck = () => {
    setCheck(!check);
  };

  function handleSubmitted() {
    const body = { email, password, confirmPassword, check: check };
    console.log(body);
    setModalVisible(false);
    navigation.navigate(ScreenNames.COMPLETEPROFILE);
  }

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Create an account"
        onBackPress={() => navigation.goBack(ScreenNames.RESETPASSWORD)}
      />
      <View style={styles.viewContainer}>
        <View style={styles.mainViewContainer}>
          <InputText
            mainViewContainer={styles.inputContainer}
            label="Email"
            placeholder="Enter here"
            value={email}
            autoCapitalize={"none"}
            onChangeText={(text: string) => {
              setChangeEmail(text);
            }}
            maxLength={40}
            numberOfLines={2}
            placeholderTextColor={AppColors.lightGrey}
          ></InputText>
          <InputText
            mainViewContainer={styles.inputContainer}
            label="Password"
            placeholder="Enter Password"
            value={password}
            autoCapitalize={"none"}
            onChangeText={(text: string) => {
              setChangePassword(text);
            }}
            maxLength={40}
            secureTextEntry={false}
            numberOfLines={2}
            placeholderTextColor={AppColors.lightGrey}
            icon={() => <OpenEye />}
          ></InputText>
          <InputText
            mainViewContainer={styles.inputContainer}
            label="Confirm Password"
            placeholder="Confirm Password"
            value={confirmPassword}
            autoCapitalize={"none"}
            onChangeText={(text: string) => {
              setConfirmPassword(text);
            }}
            maxLength={40}
            secureTextEntry={false}
            numberOfLines={2}
            placeholderTextColor={AppColors.lightGrey}
            icon={() => <OpenEye />}
          ></InputText>
        </View>
        <View style={styles.rowContainer}>
          <CustomCheckBox check={check} onPress={handleCheck} />
          <Text style={styles.text2} onPress={() => null}>
            {`   I accept the`}
          </Text>
          <Text
            style={styles.text3}
            onPress={() => navigation.navigate(ScreenNames.PRIVACYPOLICY)}
          >
            {`  Privacy Policy`}
          </Text>
          <Text style={styles.text2}> {` and `}</Text>
          <Text
            style={styles.text3}
            onPress={() => navigation.navigate(ScreenNames.TERMSANDCONDITIONS)}
          >
            {` Terms and Conditions`}
          </Text>
        </View>
        <Button variant="primary" onPress={toggleModal}>
          Register
        </Button>
        <CustomModal
          // textStyle2={styles.modalContainer}
          isVisible={modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          title={`A confirmation link has been ${"\n"}${"     "}sent to your email for verification of your account`}
          onBackButtonPress={() => handleSubmitted()}
          label="Continue"
        />
      </View>
    </ScreenWrapper>
  );
}
