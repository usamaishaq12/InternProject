import React, { Children, useRef, useState } from "react";
import { FlatList, StyleProp, View, ViewStyle } from "react-native";
import {
  Button,
  CustomHeader,
  ImageAvatar,
  ScreenWrapper,
  SwitchStatus,
} from "~components";

import { BackArrow, SettingIcon, TickCheck, TickCheckGreen } from "~assets/SVG";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { AppColors } from "~utils";
import CustomText from "~components/text";
import { FontFamily } from "~assets";
import { height } from "~utils/dimensions";

export default function ProfileScreen({ navigation }: any) {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    if (!enabled) setEnabled(true);
    else if (enabled) setEnabled(false);
    else return;
  };

  interface MoneyViewProps {
    money?: string;
    text?: string;
    moneyView?: StyleProp<ViewStyle>;
    onPress?: () => void;
  }

  const MoneyView: React.FC<MoneyViewProps> = ({
    money,
    text,
    moneyView,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.moneyView, moneyView]}
      >
        <CustomText children={money} size={6.5} />
        <CustomText children={text} size={3} />
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.rowContainer}>
          <SwitchStatus
            online={enabled}
            onOnlinePress={toggleSwitch}
            onOfflinePress={toggleSwitch}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.settingView}
            onPress={() => {}}
          >
            <SettingIcon />
          </TouchableOpacity>
        </View>
        <ImageAvatar
          viewContainerStyle={{
            marginTop: height(1),
          }}
          tick={true}
        />

        <View style={styles.ratingContainer}>
          <CustomText
            children={"John Doe"}
            size={4.9}
            fontFamily={FontFamily.Roboto_Bold}
          />
          <CustomText
            children={`********* ${4.2} (7.2)`}
            containerStyles={styles.ratingText}
          />
        </View>
        <View style={styles.rowMoneyContainer}>
          <MoneyView money="25" text="Order Recieved" />
          <MoneyView money="25" text="Order Recieved" />
          <MoneyView money="25" text="Order Recieved" />
          <MoneyView money="25" text="Order Recieved" />
        </View>
      </View>
    </ScreenWrapper>
  );
}
