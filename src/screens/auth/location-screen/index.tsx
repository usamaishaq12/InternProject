import React, { useState } from "react";
import { View } from "react-native";

import {
  Button,
  CustomHeader,
  CustomModal,
  InputText,
  ScreenWrapper,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { BackArrow, DownArrow } from "~assets/SVG";

import ScreenNames from "~Routes/routes";

export default function LocationScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [adress, setAddress] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [zipCode, setZipCode] = useState("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  function handleSubmitted() {
    const body = { adress, cityName, setCityName, countryName, zipCode };
    console.log(body);
    setModalVisible(false);
    navigation.navigate(ScreenNames.COMPLETEPROFILE);
  }

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Your Current Location"
        onBackPress={() => navigation.goBack(ScreenNames.UPLOADPICTURES)}
      />
      <View style={styles.viewContainer}>
        <View style={styles.mainViewContainer}>
          <InputText
            mainViewContainer={styles.inputContainer}
            label="Street Address"
            placeholder="14 Wall Street, Manhattan"
            value={adress}
            onChangeText={(text: string) => {
              setAddress(text);
            }}
            maxLength={40}
            placeholderTextColor={AppColors.lightGrey}
          />
          <View style={styles.rowContainer}>
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              icon={() => <DownArrow />}
              label="City"
              placeholder="New York City"
              value={cityName}
              onChangeText={(text: string) => {
                setCityName(text);
              }}
              maxLength={40}
              placeholderTextColor={AppColors.lightGrey}
            />
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              icon={() => <DownArrow />}
              label="State"
              placeholder="NY"
              value={stateName}
              onChangeText={(text: string) => {
                setStateName(text);
              }}
              maxLength={40}
              placeholderTextColor={AppColors.lightGrey}
            />
          </View>
          <View style={styles.rowContainer}>
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              icon={() => <DownArrow />}
              label="Country"
              placeholder="USA"
              value={countryName}
              onChangeText={(text: string) => {
                setCountryName(text);
              }}
              maxLength={40}
              placeholderTextColor={AppColors.lightGrey}
            />
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              label="Zip Code"
              placeholder="12345"
              value={zipCode}
              autoCapitalize={"none"}
              onChangeText={(text: string) => {
                setZipCode(text);
              }}
              maxLength={40}
              placeholderTextColor={AppColors.lightGrey}
            />
          </View>
        </View>
        <Button
          variant="primary"
          onPress={() => navigation.navigate(ScreenNames.IDENTITYVERIFICATION)}
        >
          Continue
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
