import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import CustomText from "~components/text";
import Button from "~components/button";
import { Pin } from "~assets/SVG";
import { Icons } from "~assets";

const OrderRequest = () => {
  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.machineView}>
        <Image source={Icons.machine} style={styles.machineLogoStyle} />
        <View style={styles.machineTextView}>
          <CustomText
            textStyles={styles.machinetitleText}
            children={"Landscaping"}
          />
          <CustomText
            textStyles={styles.machineText}
            children={"Lawn Mowing & Trimming"}
          />
        </View>
      </View>
      <View style={styles.pinView}>
        <Pin />
        <CustomText
          textStyles={styles.pintext}
          children={"14 Wall Street, Manhattan, New York City, NY, USA"}
        />
      </View>
      <View style={styles.rowContainer}>
        <Button
          containerStyle={styles.declineBtn}
          children={"Decline"}
          onPress={() => {}}
        />
        <Button
          containerStyle={styles.acceptBtn}
          children={"Accept"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default OrderRequest;
