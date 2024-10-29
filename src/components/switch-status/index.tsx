import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import CustomText from "~components/text";
import { AppColors } from "~utils";
interface SwitchStatusProps {
  online?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onOnlinePress: () => void;
  onOfflinePress: () => void;
}
const SwitchStatus: React.FC<SwitchStatusProps> = ({
  online,
  containerStyle,
  onOnlinePress,
  onOfflinePress,
}) => {
  // const [enabled, setEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   if (!enabled) setEnabled(true);
  //   else if (enabled) setEnabled(false);
  // };
  return (
    <View style={[styles.mainViewContainer, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.innerView,
          {
            backgroundColor: online ? AppColors.green : AppColors.transparent,
          },
        ]}
        onPress={onOnlinePress}
      >
        <CustomText
          children={"Online"}
          textStyles={online ? styles.text2 : styles.text}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.innerView,
          {
            backgroundColor: online ? AppColors.transparent : AppColors.green,
          },
        ]}
        onPress={onOfflinePress}
      >
        <CustomText
          children={"Offline"}
          textStyles={online ? styles.text : styles.text2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SwitchStatus;
