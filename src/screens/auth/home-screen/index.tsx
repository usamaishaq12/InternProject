import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { BackArrow, RightArrow } from "~assets/SVG";
import styles from "./styles";

import HomeHeader from "~components/home-header";
import OrderRequest from "~components/order-request";
import CustomText from "~components/text";
import ScreenNames from "~Routes/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceOrderRequests from "../service-order-requests";
const Stack = createNativeStackNavigator();
export default function HomeScreen({ navigation }: any) {
  return (
    <ScreenWrapper>
      <HomeHeader />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <View style={styles.mapView}></View>
            <Pressable
              style={styles.rowView}
              onPress={() =>
                navigation.navigate(ScreenNames.SERVICEORDERREQUESTS)
              }
            >
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
          </View>
        </View>
      </ScrollView>
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
