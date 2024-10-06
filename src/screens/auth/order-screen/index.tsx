import React, { Children, useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { AppColors } from "~utils";
import FilePickerModal, {
  FilePickerModalRef,
} from "~components/file-picker-modal";

import ScreenNames from "~Routes/routes";
import { BackArrow } from "~assets/SVG";
import styles from "./styles";
import { ZipCode } from "~components/zipcode-modal";

export default function OrderScreen({ navigation }: any) {
  useEffect(() => {
    const handleTabPress = () => {
      console.log("Current Route: HomeScreen");
    };

    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

    return unsubscribe; // Cleanup the listener on unmount
  }, [navigation]);

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Orders"
        onBackPress={() => navigation.goBack(ScreenNames.PDFFORM)}
      />
      {/* <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.PDFFORM)}
          />
        </View> */}
      {/* </View> */}
    </ScreenWrapper>
  );
}
