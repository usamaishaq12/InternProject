import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import { BackArrow, RightArrow } from "~assets/SVG";
import styles from "./styles";

import HomeHeader from "~components/home-header";
import CustomText from "~components/text";
import OrderRequest from "~components/order-request";

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

{
  /* <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
  
      if (route.name === "Home") {
        iconName = focused ? "home" : "ios-information-circle-outline";
      } else if (route.name === "Feed") {
        iconName = true ? "feed" : "ios-list";
      } else if (route.name === "History") {
        iconName = true ? "history" : "ios-list";
      } else if (route.name === "CreatePost") {
        iconName = true ? "post-add" : "ios-list";
      } else {
        iconName = "help-circle-outline";
      }
      return <MaterialIcons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "gray",
  })}
  >
  <Tab.Screen
    name="Home"
    component={DrawerHome}
    options={{
      headerShown: false,
    }}
  />
  <Tab.Screen name="Feed" component={Feed} />
  <Tab.Screen name="History" component={History} />
  <Tab.Screen name="CreatePost" component={CreatePost} />
  </Tab.Navigator> */
}
