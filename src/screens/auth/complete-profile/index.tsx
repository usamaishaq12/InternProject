import React, { useRef, useState } from "react";
import { View } from "react-native";
import { FontFamily, Icons } from "~assets";
import {
  Button,
  CustomModal,
  InputText,
  ScreenWrapper,
  SelectServices,
  SmallText,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { useForm } from "react-hook-form";
import { OpenEye, TickCircle } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import PhoneInput from "react-native-phone-number-input";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
import CustomText from "~components/text";
import { FlagButton } from "react-native-country-picker-modal";
import Login from "../login";

interface Service {
  id: number;
  name: string;
  isSelected: boolean;
  yearsOfExperience: string;
}
// interface ServiceMapProp {
//   item: Service;
//   index: number;
// }

export default function CompleteProfile({ navigation }) {
  // const { } = useForm()

  const phoneInput = useRef(null);
  const [NodalVisible, setNodalVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const toggleNodal = () => {
    setNodalVisible(!NodalVisible);
  };
  function handleCompleteProfile() {
    const body = { firstName, secondName, phoneCode, selectedServices };
    console.log(body);
    navigation.navigate(ScreenNames.VERIFICATIONCODE);
  }
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      backgroundColor={AppColors.white}
      barStyle="dark-content"
      scrollEnabled={true}
      footerUnScrollable={() => {
        return (
          <View style={styles.footerButton}>
            <Button variant="primary" onPress={toggleNodal}>
              Continue
            </Button>
          </View>
        );
      }}
    >
      <View style={styles.mainViewContainer}>
        <CustomText
          containerStyles={styles.headingView}
          textStyles={styles.text}
        >
          Complete your Profile
        </CustomText>
        <View style={styles.rowContainer}>
          <InputText
            mainViewContainer={styles.textmainViewContainer}
            label="First Name"
            placeholder="John"
            autoCapitalize={"none"}
            value={firstName}
            onChangeText={(text: string) => {
              setFirstName(text);
            }}
            maxLength={40}
            numberOfLines={2}
            secureTextEntry={false}
            placeholderTextColor={AppColors.lightGrey}
          ></InputText>
          <InputText
            mainViewContainer={styles.textmainViewContainer}
            label="Last Name"
            placeholder="Doe"
            value={secondName}
            autoCapitalize={"none"}
            onChangeText={(text: string) => {
              setSecondName(text);
            }}
            maxLength={40}
            secureTextEntry={false}
            numberOfLines={2}
            placeholderTextColor={AppColors.lightGrey}
          ></InputText>
        </View>
        {/* <PhoneInput /> */}
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
            onChangeFormattedText={(text) => setPhoneCode(text)}
          />
        </View>
        <SelectServices
          children="Selected Services"
          onDonePressed={(value: any) =>
            console.log("MainScreen", setSelectedServices(value))
          }
        />
        {selectedServices.map((item: Service, index: number) => {
          // console.log(item, "item");
          // console.log(item, "item");
          // console.log(item?.name, "item");
          return (
            <InputText
              mainViewContainer={styles.serviceViewContainer}
              label={`Years of experience in ${item?.name}`}
              placeholder="0"
              autoCapitalize={"none"}
              value={item.yearsOfExperience}
              onChangeText={(t: any) => {
                let temp = [...selectedServices];
                temp[index].yearsOfExperience = t;
                console.log(temp, "temp");
                setSelectedServices(temp);
                // console.log(t, "t");
              }}
              maxLength={2}
              secureTextEntry={false}
              numberOfLines={2}
              keyboardType="numeric"
              placeholderTextColor={AppColors.lightGrey}
            />
          );
        })}

        <CustomModal
          isVisible={NodalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          textStyle={styles.modalText}
          tickIcon={() => <TickCircle />}
          title={`We sent a 4 digit code to ${""} your phone number for verification`}
          onBackdropPress={() => setNodalVisible(!NodalVisible)}
          onBackButtonPress={() => {
            setNodalVisible(!NodalVisible);
            handleCompleteProfile();
          }}
          label="Continue"
        />
      </View>
    </ScreenWrapper>
  );
}
