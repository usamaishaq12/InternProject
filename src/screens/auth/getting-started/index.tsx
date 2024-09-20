import React from "react";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icons } from "~assets";
import styles from "./styles";
import { Button, ScreenWrapper } from "~components";
import { AppColors } from "~utils";
import ScreenNames from "~Routes/routes";

export default function GettingStarted({ navigation }) {
  return (
    <ScreenWrapper
      transclucent
      statusBarColor={AppColors.transparent}
      barStyle="light-content"
      backgroundImage={Icons.backgroundImage}
    >
      <View style={styles.mainViewContainer}>
        <Image source={Icons.chuck} style={styles.chuckImage} />
        <Text style={styles.text}>v1.0.0</Text>
        <Button
          onPress={() => navigation.navigate(ScreenNames.GETTINGLOGIN)}
          variant="green"
        >
          Get Started
        </Button>
      </View>
    </ScreenWrapper>
  );
}
