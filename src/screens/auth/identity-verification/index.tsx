import React, { useRef, useState } from "react";
import { View } from "react-native";
import {
  Button,
  CustomHeader,
  ImageAvatar,
  ScreenWrapper,
  SmallText,
} from "~components";

import { AppColors } from "~utils";
import FilePickerModal, {
  FilePickerModalRef,
} from "~components/file-picker-modal";

import ScreenNames from "~Routes/routes";
import styles from "./styles";
import { BackArrow } from "~assets/SVG";

export default function IdentityVerification({ navigation }) {
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);
  const showCnicPickerRef = useRef<FilePickerModalRef | null>(null);
  const [drivingPicture, setDrivingPicture] = useState<string | null>(null);
  const [cnicPicture, setCnicPicture] = useState<string | null>(null);

  function drivingHandleSubmit() {
    const body = { drivingPicture };
    showImagePickerRef.current?.show();
    console.log(body);
  }
  function cnicHandleSubmit() {
    const body = { cnicPicture };
    showCnicPickerRef.current?.show();
    console.log(body);
  }

  const drivingPictureSelection = (value: any) => {
    console.log("driving file:", value);
    if (value && value.path) {
      setDrivingPicture(value.path);
    }
  };

  const cnicPictureSlection = (value: any) => {
    console.log("cnic file:", value);
    if (value && value.path) {
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
            onPress={() => drivingHandleSubmit()}
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
            onPress={() => cnicHandleSubmit()}
          />
          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.SERVICEAREAS)}
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
