import React, { Children, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import {
  Button,
  CustomHeader,
  ImageAvatar,
  InputText,
  ScreenWrapper,
  SelectZipCode,
  SmallText,
} from "~components";

import { AppColors } from "~utils";

import ScreenNames from "~Routes/routes";
import { BackArrow } from "~assets/SVG";
import styles from "./style.";
import { ZipCode } from "~components/zipcode-modal";
import GlobalMethods from "~utils/method";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

export default function ServiceAreas({ navigation }) {
  const [zipCode, setSelectedZipCode] = useState<ZipCode[]>([]);
  const [mileRadius, setMileRadius] = useState("");
  const [loader, setLoader] = useState(false);

  const user = useSelector(selectUserMeta);

  const CompleteSubmit = async () => {
    if (!zipCode) {
      GlobalMethods.errorMessage("Please add a ZipCode!");
    } else if (!mileRadius) {
      GlobalMethods.errorMessage("Please add mile radius!");
    } else {
      setLoader(true);

      const uploadToFireStore = async () => {
        const serviceAreas = { zipCode, mileRadius };

        try {
          await firestore().collection("Users").doc(user.uid).update({
            serviceAreas,
          });
          console.log({ zipCode: zipCode, mileRadius: mileRadius });
          GlobalMethods.successMessage(
            "Data added to  FireDatabase successfully"
          );
          console.log("Data added to FireDatabase");
          setLoader(false);
          navigation.navigate(ScreenNames.SELECTRADIUS);
        } catch (error) {
          console.log("Error while updating", error);
          GlobalMethods.errorMessage(" Data uploading to fireBase failed! ");
          setLoader(false);
        }
      };
      uploadToFireStore();
    }
  };

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Service Areas"
        onBackPress={() => navigation.goBack(ScreenNames.IDENTITYVERIFICATION)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <SmallText
            textStyles={styles.smallText}
            children={"Select the areas where you wish to offer your services"}
          />
          <SelectZipCode
            mainViewContainer={styles.zipCodeContainer}
            children="Select Zip Codes"
            title="Select Zip Codes"
            onDonePressed={(value) => setSelectedZipCode(value)}
          />

          <SmallText
            textStyles={styles.smallText2}
            children={`Or select a mile radius around your current \nlocation`}
          />
          <ImageAvatar
            imageStyle={styles.imageStyles}
            cameraContainerStyle={styles.identityContainerStyle}
            iconStyle={styles.iconViewStyle}
            // source={cnicPicture ? { uri: cnicPicture } : undefined}
            onPress={() => {}}
          />
          {/* <SelectZipCode
            children="Mile Radius"
            title="Select Mile Radius"
            onDonePressed={(value) => setMileRadius(value)}
          /> */}
          <InputText
            mainViewContainer={styles.inputContainer}
            label="Mile radius"
            placeholder="within 20 miles"
            value={mileRadius}
            onChangeText={(text: string) => {
              setMileRadius(text);
            }}
            maxLength={40}
            secureTextEntry={false}
            placeholderTextColor={AppColors.lightGrey}
          />
          <Button
            loader={loader}
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => CompleteSubmit()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
