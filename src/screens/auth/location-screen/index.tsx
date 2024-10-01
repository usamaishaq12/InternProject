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
import fireStore from "@react-native-firebase/firestore";
import ScreenNames from "~Routes/routes";
import GlobalMethods from "~utils/method";
import { useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

export default function LocationScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [streetAdress, setStreetAddress] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [loader, setLoader] = useState(false);
  const user = useSelector(selectUserMeta);
  // console.log(user);

  const validation = () => {
    if (!streetAdress) {
      GlobalMethods.errorMessage("Please enter Street Adress!");
    } else if (!cityName) {
      GlobalMethods.errorMessage("Please enter City name!");
    } else if (!stateName) {
      GlobalMethods.errorMessage("Please enter State!");
    } else if (!countryName) {
      GlobalMethods.errorMessage("Please enter Country name!");
    } else if (!zipCode) {
      GlobalMethods.errorMessage("Please enter zip code!");
    } else handleSubmitted();
  };

  function handleSubmitted() {
    setLoader(true);
    const body = { streetAdress, cityName, stateName, countryName, zipCode };
    console.log(body, ">>>>>>>>>>>>>");

    addLocationData(streetAdress, cityName, stateName, countryName, zipCode);
  }

  const addLocationData = async (
    streetAdress?: string,
    cityName?: string,
    stateName?: string,
    countryName?: string,
    zipCode?: string
  ) => {
    const id = new Date().valueOf().toString();
    const address = {
      StreetAddress: streetAdress,
      City: cityName,
      State: stateName,
      Country: countryName,
      ZipCode: zipCode,
      createdAt: id,
    };
    try {
      await fireStore()
        .collection("Users")
        .doc(user.uid)
        .update({
          address: address,
          // StreetAddress: streetAdress,
          // City: cityName,
          // State: stateName,
          // Country: countryName,
          // ZipCode: zipCode,
          // createdAt: id,
        })
        .then(() => {
          GlobalMethods.successMessage("Data added succesfully");
          console.log("Data added Successfully");
          setLoader(false);
          setModalVisible(true);
        });
    } catch (error) {
      console.log(error, "Data not added");
      GlobalMethods.errorMessage("Error data not added");
    }
  };

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
            value={streetAdress}
            onChangeText={(text: string) => {
              setStreetAddress(text);
            }}
            maxLength={40}
            secureTextEntry={false}
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
              onChangeText={(value: string) => {
                setCityName(value);
              }}
              maxLength={40}
              secureTextEntry={false}
              placeholderTextColor={AppColors.lightGrey}
            />
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              icon={() => <DownArrow />}
              label="State"
              placeholder="NY"
              value={stateName}
              onChangeText={(text: string) => setStateName(text)}
              maxLength={40}
              secureTextEntry={false}
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
              onChangeText={(text: string) => setCountryName(text)}
              maxLength={40}
              secureTextEntry={false}
              placeholderTextColor={AppColors.lightGrey}
            />
            <InputText
              mainViewContainer={styles.textmainViewContainer}
              iconContainer={styles.iconContainer}
              label="Zip Code"
              placeholder="12345"
              value={zipCode}
              autoCapitalize={"none"}
              onChangeText={(text: string) => setZipCode(text)}
              maxLength={40}
              secureTextEntry={false}
              placeholderTextColor={AppColors.lightGrey}
            />
          </View>
        </View>
        <Button
          loader={loader}
          variant="primary"
          onPress={() => {
            validation();
          }}
        >
          Continue
        </Button>
        <CustomModal
          // textStyle2={styles.modalContainer}
          isVisible={modalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          title={`A confirmation link has been ${"\n"}${"     "}sent to your email for verification of your account`}
          onContinuePress={() => {
            setModalVisible(false);
            navigation.navigate(ScreenNames.IDENTITYVERIFICATION);
          }}
          label="Continue"
        />
      </View>
    </ScreenWrapper>
  );
}
