import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Icons } from "~assets";
import {
  Button,
  CustomCheckBox,
  InputText,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";

// import { InputProps } from "~types";
import { AppColors } from "~utils";
import { useForm } from "react-hook-form";
import { OpenEye } from "~assets/SVG";
import ScreenNames from "~Routes/routes";

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
          <Button variant="primary">Log In</Button>
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
