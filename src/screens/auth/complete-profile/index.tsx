import React, { useRef, useState } from "react";
import { Alert, View } from "react-native";
import { FontFamily, Icons } from "~assets";
import {
  Button,
  CustomModal,
  InputText,
  PhoneNumberComponent,
  ScreenWrapper,
  SelectServices,
  SmallText,
} from "~components";
import auth from "@react-native-firebase/auth";
import styles from "./styles";
import { AppColors } from "~utils";

import { OpenEye, TickCircle } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import PhoneInput from "react-native-phone-number-input";

import CustomText from "~components/text";
import { FlagButton } from "react-native-country-picker-modal";

import GlobalMethods from "~utils/method";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

// interface ServiceMapProp {
//   item: Service;
//   index: number;
// }

export default function CompleteProfile({ navigation }) {
  // const { } = useForm()
  const user = useSelector(selectUserMeta);
  // console.log(user, ">>>>>");
  const phoneInput = useRef<PhoneInput>(null);
  const [NodalVisible, setNodalVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [loader, setLoader] = useState(false);

  interface Service {
    map(arg0: (services: any) => any): any;
    id: number;
    name: string;
    isSelected: boolean;
    yearsOfExperience: string;
  }

  const toggleNodal = () => {
    setNodalVisible(!NodalVisible);
  };
  function handleCompleteProfile() {
    const body = { firstName, secondName, phoneCode, selectedServices };
    console.log(body);
    navigation.navigate(ScreenNames.VERIFICATIONCODE, { confirm }, { sendOtp });
  }
  const validation = () => {
    if (!firstName) {
      GlobalMethods.errorMessage("Please enter first name");
    } else if (!secondName) {
      GlobalMethods.errorMessage("Please enter last name");
    } else if (!phoneCode || phoneCode.length < 10) {
      GlobalMethods.errorMessage("Phone number should be of 10 digits");
    } else if (!selectedServices || selectedServices.length < 1) {
      GlobalMethods.errorMessage(
        "Please select atleast 1 selected services field"
      );
    } else {
      addData(firstName, secondName, phoneCode, selectedServices);
    }
  };
  // "^(?:+1)?s?(?d{3})?[-.s]?d{3}[-.s]?d{4}$"
  const addData = async (
    firstName: string,
    secondName: string,
    phoneCode: string,
    selectedServices: Service[]
  ) => {
    setLoader(true);
    console.log(firstName, "FirstName");
    console.log(secondName, "lastName");
    console.log(phoneCode, "phoneNumber");
    console.log(selectedServices, "selectedServices");
    const id = new Date().valueOf().toString();

    try {
      await firestore().collection("Users").doc(user.uid).set({
        firstName: firstName,
        lastName: secondName,
        phoneNumber: phoneCode,
        services: selectedServices,
        createdAt: id,
      });
      GlobalMethods.successMessage("Data added succesfully");
      console.log("Data added Successfully");
      setLoader(false);
      sendOtp("+1 650 555 1234");
    } catch (error) {
      console.log(error, "Data not added");
      GlobalMethods.errorMessage("Error data not added");
    }
  };

  async function sendOtp(phoneCode: string) {
    setLoader(true);
    if (!phoneCode) {
      GlobalMethods.errorMessage("Please, enter a valid phone number");
      return;
    }
    try {
      const confirmation = await auth().verifyPhoneNumber(phoneCode);
      console.log(confirmation, "confirmation");
      setConfirm(confirmation);
      console.log("OTP sent successfully");
      GlobalMethods.toastMessage("OTP sent successfully");
      setLoader(false);
      toggleNodal();
    } catch (e) {
      console.log("OTP Failed", e);
      GlobalMethods.errorMessage("OTP Failed");
    }
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
            <Button
              loader={loader}
              variant="primary"
              onPress={() => {
                validation();
              }}
            >
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
          />
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
          />
        </View>
        <PhoneNumberComponent
          ref={phoneInput}
          defaultCode="US"
          placeholder="Phone number"
          onChangeFormattedText={(text) => {
            setPhoneCode(text);
          }}
        />

        <SelectServices
          children="Selected Services"
          onDonePressed={(value: any) =>
            console.log("MainScreen", setSelectedServices(value))
          }
        />
        {selectedServices.map((item: Service, index: number) => {
          return (
            <InputText
              key={index}
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
          onBackdropPress={() => toggleNodal()}
          onContinuePress={() => {
            setNodalVisible(!NodalVisible);
            handleCompleteProfile();
          }}
          label="Continue"
        />
      </View>
    </ScreenWrapper>
  );
}
// const addData = async () => {
//   const profileData = {
//     firstName,
//     secondName,
//     phoneCode,
//     selectedServices,
//     yearsOfExperience: selectedServices.map((item) => item.yearsOfExperience),
//   };
//   try {
//     await firestore()
//       .collection("completeProfile")
//       .add(profileData)
//       .then(() => {
//         console.log("Data added successfully");
//       });
//   } catch (error) {
//     console.error("Error adding data: ", error);
//   }
// };
