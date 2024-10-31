import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { Icons } from "~assets";
import {
  Button,
  CustomCheckBox,
  InputText,
  InputTextWithValidation,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";
import auth from "@react-native-firebase/auth";
// import { InputProps } from "~types";
import { AppColors } from "~utils";

import { OpenEye, TickCheck } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import GlobalMethods from "~utils/method";

import { selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import loginValidationSchema from "~utils/ValidationSchema";
export default function GettingLogin({ navigation }) {
  const [email, setChangeEmail] = useState("");
  const [password, setChangePassword] = useState("");
  const [check, setCheck] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const user = useSelector(selectUserMeta);
  const dispatch = useDispatch();
  const handleCheck = () => {
    setCheck(!check);
  };
  interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
  }
  const onSubmit = (data: LoginFormData) => {
    console.log(data, ">>>>>>>");
  };

  function handleSubmitted() {
    navigation.navigate(ScreenNames.CREATEACCOUNT);
  }
  const getDataFromFire = async (uid: string) => {
    console.log(uid, ">>>>>");
    setLoader(true);
    try {
      await firestore()
        .collection("Users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            GlobalMethods.successMessage("User Data Fecthed Successfully!");
            console.log("User Data Fecthed Successfully!");
            dispatch(setUserMeta(documentSnapshot.data()));
            dispatch(setIsLoggedIn(true));
          }
        });
    } catch (error) {
      console.log("Error while fetching data>>>>", error);
    }
    setLoader(false);
  };

  const loginAccount = async () => {
    setLoader(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((val) => {
        getDataFromFire(val.user.uid);
        console.log(val, "val!!!!!!!!!!");
        GlobalMethods.successMessage("Account Login Successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          GlobalMethods.errorMessage("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          GlobalMethods.errorMessage("That email address is invalid!");
        }
        GlobalMethods.errorMessage("Invalid Login Credentials");
        console.log(error);
      });
    setLoader(false);
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
        {/* <InputTextWithValidation
          control={control}
          name="email"
          placeholder="Enter email"
          label="Email"
          secureTextEntry={false}
        /> */}
        {/* <Controller
          name="email"
          control={control}
          render={({ field }) => (
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
              keyboardType="email-address"
              placeholderTextColor={AppColors.lightGrey}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorEmailStyle}>{errors.email.message}</Text>
        )}
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
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
              keyboardType="name-phone-pad"
              placeholderTextColor={AppColors.lightGrey}
              icon={() => <OpenEye />}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorPasswordStyle}>
            {errors.password.message}
          </Text>
        )} */}

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
            onPress={handleSubmit(onSubmit)}
          >
            Log In
          </Button>
        </View>
        <View style={styles.lowerButton}>
          <Text style={styles.textBottom}> Don’t have an account?</Text>
          <Button
            containerStyle={{ backgroundColor: AppColors.white }}
            onPress={() => {
              handleSubmitted();
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
