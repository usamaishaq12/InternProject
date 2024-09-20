import React, { Children, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import {
  Button,
  CustomHeader,
  ImageAvatar,
  ScreenWrapper,
  SelectZipCode,
  SmallText,
} from "~components";

import { AppColors } from "~utils";

import ScreenNames from "~Routes/routes";
import { BackArrow } from "~assets/SVG";
import styles from "./style.";
import { ZipCode } from "~components/zipcode-modal";

export default function ServiceAreas({ navigation }) {
  const [selectZipCode, setSelectedZipCode] = useState<ZipCode[]>([]);
  const [cnicPicture, setCnicPicture] = useState<string | null>(null);

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
          <SelectZipCode children="Mile Radius" onDonePressed={() => {}} />
          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.SELECTRADIUS)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
