import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { Icons } from "~assets";
import {
  Button,
  CustomCheckBox,
  InputText,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";
import auth from "@react-native-firebase/auth";
// import { InputProps } from "~types";
import { AppColors } from "~utils";
import { useForm } from "react-hook-form";
import { OpenEye, TickCheck } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import GlobalMethods from "~utils/method";

export default function GettingLogin({ navigation }) {
  // const {

  // } = useForm()

  const [email, setChangeEmail] = useState("");
  const [password, setChangePassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    console.log("setcheck", check);
    setCheck(!check);
  };

  function handleSubmit() {
    const body = { email, password, check: check };
    console.log(body);
    navigation.navigate(ScreenNames.CREATEACCOUNT);
  }
  const validation = () => {
    if (!email || !email.includes("@") || !/\S+@\S+\.\S+/.test(email)) {
      GlobalMethods.errorMessage("Please enter correct email!");
    } else if (!password || password.length < 6) {
      GlobalMethods.errorMessage(
        "Password should be greater than 6 characters!"
      );
    } else if (!check) {
      GlobalMethods.toastMessage("Please Select Remember me!");
    } else {
      loginAccount();
    }
  };

  const loginAccount = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        GlobalMethods.successMessage("Account Login Successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          GlobalMethods.errorMessage("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          GlobalMethods.errorMessage("That email address is invalid!");
        }
        console.log(error);
      });
  };
  return (
    <ScreenWrapper
      transclucent
      statusBarColor={AppColors.transparent}
      barStyle="dark-content"
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.innerContaner}>
          <Image source={Icons.chuck} style={styles.chuckImage} />
          <Text style={styles.text}>Log in to your account</Text>
        </View>
        <InputText
          mainViewContainer={styles.inputViewContainer}
          label="Email"
          placeholder="Enter here"
          value={email}
          autoCapitalize={"none"}
          onChangeText={(text: string) => {
            setChangeEmail(text);
          }}
          maxLength={40}
          numberOfLines={1}
          secureTextEntry={false}
          placeholderTextColor={AppColors.lightGrey}
        ></InputText>
        <InputText
          label="Password"
          placeholder="Enter Password"
          value={password}
          autoCapitalize={"none"}
          onChangeText={(value: string) => {
            setChangePassword(value);
          }}
          maxLength={40}
          secureTextEntry={false}
          numberOfLines={1}
          placeholderTextColor={AppColors.lightGrey}
          icon={() => <OpenEye />}
        ></InputText>

        <View style={styles.rowContainer}>
          <CustomCheckBox
            upperIcon
            lowerIcon
            check={check}
            textStyleP={styles.checkBoxStyle}
            onPress={handleCheck}
          />
          <TouchableOpacity>
            <Text style={styles.text2}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.RESETPASSWORD)}
          >
            <Text style={styles.text3}>{`Forgot Password?`}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginButtonContainer}>
          <Button variant="primary" onPress={() => validation()}>
            Log In
          </Button>
        </View>
        <View style={styles.lowerButton}>
          <Text style={styles.textBottom}> Don’t have an account?</Text>
          <Button
            onPress={() => {
              handleSubmit();
            }}
            variant="secondary"
            textStyle={styles.textColor}
          >
            Create an account
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  );
}
