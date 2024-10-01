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

import Home from "~screens/app/home";
import {
  selectIsLoggedIn,
  selectUserMeta,
  setIsLoggedIn,
  setUserMeta,
} from "~redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";

export default function GettingLogin({ navigation }) {
  // const {

  // } = useForm()

  const [email, setChangeEmail] = useState("");
  const [password, setChangePassword] = useState("");
  const [check, setCheck] = useState(false);
  const [loader, setLoader] = useState(false);

  const user = useSelector(selectUserMeta);
  const dispatch = useDispatch();
  const handleCheck = () => {
    console.log("setcheck", check);
    setCheck(!check);
  };

  function handleSubmit() {
    const body = { email, password, check: check };
    console.log(body);
    navigation.navigate(ScreenNames.CREATEACCOUNT);
  }
  const getDataFromFire = async () => {
    setLoader(true);
    try {
      await firestore()
        .collection("Users")
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          console.log("User exists: ", documentSnapshot.exists);

          if (documentSnapshot.exists) {
            console.log("User data>>>>>>: ", documentSnapshot.data());
            dispatch(setUserMeta(documentSnapshot.data()));
            dispatch(setIsLoggedIn(true));
          }
        });
    } catch (error) {
      console.log("Error>>>>>>>>>.", error);
    }

    setLoader(false);
  };

  const loginAccount = async () => {
    setLoader(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        GlobalMethods.successMessage("Account Login Successfully!");
        console.log("Account Login Successfully!");
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
    setLoader(false);
    getDataFromFire();
  };
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
        />
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
        />

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
          <Button
            loader={loader}
            variant="primary"
            onPress={() => {
              validation();
            }}
          >
            Log In
          </Button>
        </View>
        <View style={styles.lowerButton}>
          <Text style={styles.textBottom}> Don’t have an account?</Text>
          <Button
            containerStyle={{ backgroundColor: AppColors.white }}
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
