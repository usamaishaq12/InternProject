import React, { Children, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
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
import { number } from "yup";
import GlobalMethods from "~utils/method";
import { useDispatch, useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

export default function CreateAccount({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setChangeEmail] = useState("");
  const [password, setChangePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleCheck = () => {
    console.log("setcheck", check);
    setCheck(!check);
  };

  const validation = () => {
    if (!email || !email.includes("@") || !/\S+@\S+\.\S+/.test(email)) {
      GlobalMethods.errorMessage("Please enter correct email!");
    } else if (!password || password.length < 6) {
      GlobalMethods.errorMessage(
        "Password should be greater than 6 characters!"
      );
    } else if (!confirmPassword || confirmPassword.length < 6) {
      GlobalMethods.errorMessage(
        "Confirm Password should be greater than 6 characters!"
      );
    } else if (password !== confirmPassword) {
      GlobalMethods.errorMessage("Please match both password fields!");
    } else if (!check) {
      GlobalMethods.errorMessage("Please accept term and conditions!");
    } else {
      createAccount();
    }
  };

  const createAccount = () => {
    setLoader(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        GlobalMethods.successMessage("Account successfully created!");
        setLoader(false);

        toggleModal();
      })

      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          GlobalMethods.errorMessage("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          GlobalMethods.errorMessage("That email address is invalid!");
        }
        console.log(error);
        setLoader(false);
      });
  };
  function handleSubmitted() {
    const body = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
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
            secureTextEntry={false}
            placeholderTextColor={AppColors.lightGrey}
          />

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
          />

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
          />
        </View>
        <View style={styles.rowContainer}>
          <CustomCheckBox
            upperIcon
            lowerIcon
            check={check}
            onPress={handleCheck}
          />
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

        <Button
          loader={loader}
          variant="primary"
          onPress={() => {
            validation();
          }}
        >
          Register
        </Button>

        <CustomModal
          isVisible={modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => toggleModal()}
          title={`A confirmation link has been ${"\n"}${"     "}sent to your email for verification of your account`}
          onContinuePress={() => {
            handleSubmitted();
          }}
          label="Continue"
        />
      </View>
    </ScreenWrapper>
  );
}
