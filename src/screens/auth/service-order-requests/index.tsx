import React, { Children, useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";

import ScreenNames from "~Routes/routes";
import { BackArrow } from "~assets/SVG";
import styles from "./styles";
import OrderRequest from "~components/order-request";

export default function ServiceOrderRequests({ navigation }: any) {
  return (
    <ScreenWrapper>
      <CustomHeader
        backIcon={<BackArrow />}
        title="Service Order Requests"
        onBackPress={() => navigation.navigate(ScreenNames.HOMESCREEN)}
      />
      <ScrollView>
        <View style={styles.container}>
          <OrderRequest mainViewContainer={styles.mainViewContainer} />
          <OrderRequest mainViewContainer={styles.mainViewContainer} />
          <OrderRequest mainViewContainer={styles.mainViewContainer} />
          <OrderRequest mainViewContainer={styles.mainViewContainer} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
