import React, { useRef, useState } from "react";
import { View } from "react-native";
import {
  Button,
  CustomHeader,
  ImageAvatar,
  ScreenWrapper,
  SmallText,
} from "~components";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import { AppColors } from "~utils";
import FilePickerModal, {
  FilePickerModalRef,
} from "~components/file-picker-modal";

import ScreenNames from "~Routes/routes";
import styles from "./styles";
import { BackArrow } from "~assets/SVG";
import GlobalMethods from "~utils/method";
import { useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

export default function IdentityVerification({ navigation }) {
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);
  const showCnicPickerRef = useRef<FilePickerModalRef | null>(null);
  const [drivingPicture, setDrivingPicture] = useState<string | null>(null);
  const [cnicPicture, setCnicPicture] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);

  const user = useSelector(selectUserMeta);

  const addLicenseToStorage = async (image: any) => {
    try {
      const reference = storage().ref(
        `LicensePictures/${image.split("/").pop()}`
      );
      const task = reference.putFile(image);
      await task;
      console.log("Driving license Uploading to storage successful");
      const url = await reference.getDownloadURL();
      console.log(" LicensePictures Url>>>>>", url);
      return url;
    } catch (error) {
      console.log("Driving license not added to Storage Bucket!", error);
    }
  };
  const addCnicToStorage = async (image: any) => {
    try {
      const reference = storage().ref(`CnicPictures/${image.split("/").pop()}`);
      const task = reference.putFile(image);
      await task;
      console.log("Cnic Picture Uploading to storage successful");
      const url = await reference.getDownloadURL();
      console.log("Cnic Pictures Url>>>>>", url);
      return url;
    } catch (error) {
      console.log("Cnic Picture added to Storage Bucket!", error);
    }
  };

  const CompleteSubmit = async () => {
    if (!drivingPicture) {
      GlobalMethods.errorMessage("Please add a Driving License photo!");
    } else if (!cnicPicture) {
      GlobalMethods.errorMessage("Please add a Cnic photo!");
    } else {
      setLoader(true);
      const licenseUrl = await addLicenseToStorage(drivingPicture);
      const cnicUrl = await addCnicToStorage(drivingPicture);
      const uploadToFireStore = async () => {
        try {
          await firestore()
            .collection("Users")
            .doc(user.uid)
            .update({
              identityVerification: {
                license: licenseUrl,
                cnic: cnicUrl,
              },
            });
          GlobalMethods.successMessage(
            "Pictures uploaded to  FireDatabase successfully"
          );
          console.log("Pictures Uploaded to FireDatabase");
          setLoader(false);
          navigation.navigate(ScreenNames.SERVICEAREAS);
        } catch (error) {
          console.log("Error while updating", error);
          GlobalMethods.errorMessage(" Images Uploading to fireBase failed! ");
        }
      };
      uploadToFireStore();
    }
  };

  const drivingPictureSelection = (value: any) => {
    console.log("driving file:", value);
    if (value) {
      setDrivingPicture(value.path);
    }
  };

  const cnicPictureSlection = (value: any) => {
    console.log("cnic file:", value);
    if (value) {
      setCnicPicture(value.path);
    }
  };
  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Identity Verification"
        onBackPress={() => navigation.goBack(ScreenNames.LOCATIONSCREEN)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <SmallText
            textStyles={styles.smallText}
            children={"1. Upload a scanned copy of your driving license"}
          />

          <ImageAvatar
            cameraContainerStyle={styles.identityContainerStyle}
            imageStyle={styles.imageStyles}
            iconStyle={styles.iconViewStyle}
            color="white"
            source={drivingPicture ? { uri: drivingPicture } : undefined}
            onPress={() => showImagePickerRef.current?.show()}
          />

          <SmallText
            textStyles={styles.smallText2}
            children={
              "2. Upload a scanned copy of any government authorised ID (optional for US Nationals)"
            }
          />
          <ImageAvatar
            color="white"
            cameraContainerStyle={styles.identityContainerStyle}
            imageStyle={styles.imageStyles}
            iconStyle={styles.iconViewStyle}
            source={cnicPicture ? { uri: cnicPicture } : undefined}
            onPress={() => showCnicPickerRef.current?.show()}
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
        <FilePickerModal
          ref={showImagePickerRef}
          onFilesSelected={drivingPictureSelection}
        />
        <FilePickerModal
          ref={showCnicPickerRef}
          onFilesSelected={cnicPictureSlection}
        />
      </View>
    </ScreenWrapper>
  );
}
