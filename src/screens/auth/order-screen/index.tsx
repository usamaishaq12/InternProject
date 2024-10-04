import React, { Children, useRef, useState } from "react";
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

export default function OrderScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Select Radius"
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
