import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import CustomText from "~components/text";
import Button from "~components/button";
import { Pin } from "~assets/SVG";
import { Icons } from "~assets";

interface OrderRequestProps {
  mainViewContainer?: StyleProp<ViewStyle>;
}
const OrderRequest: React.FC<OrderRequestProps> = ({ mainViewContainer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={[styles.mainViewContainer, mainViewContainer]}>
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
      {isVisible ? (
        <Button
          textStyle={styles.declineButtonText}
          containerStyle={styles.declineButtonContainer}
          children={"You declined this service request"}
          onPress={() => console.log("Pressed")}
        />
      ) : (
        <View style={styles.rowContainer}>
          <Button
            containerStyle={styles.declineBtn}
            children={"Decline"}
            onPress={() => setIsVisible(true)}
          />
          <Button
            containerStyle={styles.acceptBtn}
            children={"Accept"}
            onPress={() => console.log("Accept")}
          />
        </View>
      )}
    </View>
  );
};

export default OrderRequest;
