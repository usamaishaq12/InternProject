import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { BackArrow, RightArrow } from "~assets/SVG";
import styles from "./styles";

import HomeHeader from "~components/home-header";
import OrderRequest from "~components/order-request";
import CustomText from "~components/text";
import ScreenNames from "~Routes/routes";
import AppColors from "~utils/app-colors";

export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    const handleTabPress = () => {
      console.log("Current Route: HomeScreen");
    };

    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

    return unsubscribe; // Cleanup the listener on unmount
  }, [navigation]);

  return (
    <ScreenWrapper>
      <HomeHeader />
      <View style={styles.container}>
        {/* <View style={styles.viewContainer}>
          <View style={styles.mapView}></View>
          <Pressable style={styles.rowView} onPress={() => {}}>
            <CustomText
              textStyles={styles.serviceOrderText}
              children={"Service Order Requests"}
            />
            <RightArrow />
          </Pressable>
          <OrderRequest />
          <CustomText
            textStyles={styles.dateTitle}
            children={"Thu, 21 July, 2022"}
          />
          <OrderRequest />
         
        </View> */}
      </View>
    </ScreenWrapper>
  );
}
{
  /* <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.PDFFORM)}
          /> */
}
