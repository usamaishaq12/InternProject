import React, { useState } from "react";
import { View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { AppColors } from "~utils";

import ScreenNames from "~Routes/routes";
import { BackArrow } from "~assets/SVG";
import styles from "./styles";

export default function PdfForm({ navigation }) {
  // const [selectZipCode, setSelectedZipCode] = useState<ZipCode[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleStyle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="W9 Form"
        onBackPress={() => navigation.goBack(ScreenNames.SELECTRADIUS)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}></View>
        <View style={styles.footerButtonContainer}>
          {!isVisible ? (
            <Button
              containerStyle={styles.footerButton}
              variant="primary"
              buttonTextColor={AppColors.white}
              children={"Fill the W9 Form"}
              onPress={() => handleStyle()}
            />
          ) : (
            <View style={styles.rowContainer}>
              <Button
                containerStyle={styles.editButton}
                children={"Edit Form"}
                onPress={() => {}}
              />
              <Button
                containerStyle={styles.doneButton}
                children={"Done"}
                onPress={() => navigation.navigate(ScreenNames.GETTINGSTARTED)}
              />
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
