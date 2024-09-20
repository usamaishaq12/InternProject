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

export default function SelectRadius({ navigation }) {
  const [selectZipCode, setSelectedZipCode] = useState<ZipCode[]>([]);
  const [cnicPicture, setCnicPicture] = useState<string | null>(null);

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Select Radius"
        onBackPress={() => navigation.goBack(ScreenNames.SERVICEAREAS)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.PDFFORM)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
