import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { BackArrow, RightArrow } from "~assets/SVG";
import styles from "./styles";

import HomeHeader from "~components/home-header";
import CustomText from "~components/text";
import OrderRequest from "~components/order-request";
import ScreenNames from "~Routes/routes";
import { DateScreen, OrderScreen, ProfileScreen } from "..";

export default function HomeScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <HomeHeader />
      {/* <View style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.mapView}></View>
          <Pressable style={styles.rowView} onPress={() => {}}>
            <CustomText
              textStyles={styles.serviceOrderText}
              children={"Service Order Requests"}
            />
            <RightArrow />
          </Pressable> */}
      {/* <OrderRequest />
          <CustomText
            textStyles={styles.dateTitle}
            children={"Thu, 21 July, 2022"}
          />
          <OrderRequest /> */}
      {/* <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.PDFFORM)}
          /> */}
      {/* </View>
      </View> */}
    </ScreenWrapper>
  );
}
