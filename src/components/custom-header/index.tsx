import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { BackArrow } from "~assets/SVG";
import { MediumText, SmallText } from "~components/text";
import { AppColors } from "~utils";
import { FontFamily } from "~assets";

interface CustomHeaderProps {
  title?: string;
  backIcon?: JSX.Element;
  onBackPress?: () => void;
  headerContainer?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  backIcon,
  onBackPress,
  headerContainer,
  textStyle,
}) => {
  return (
    <View style={[styles.viewContainer, headerContainer]}>
      <TouchableOpacity style={styles.header} onPress={onBackPress}>
        <BackArrow />
      </TouchableOpacity>
      <MediumText
        fontFamily={FontFamily.Roboto_Bold}
        color={AppColors.white}
        containerStyles={styles.headertext}
      >
        {title}
      </MediumText>
    </View>
  );
};

export default CustomHeader;
