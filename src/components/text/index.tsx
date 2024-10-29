import React, { FC, ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { FontFamily } from "~assets";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";

interface TextProps {
  children?: ReactNode;
  size?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  textStyles?: any;
  textProps?: any; // You can replace `any` with specific Text component props
  onPress?: (() => void) | undefined;
  fontFamily?: string;
  containerStyles?: ViewStyle;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
}

const CustomText: FC<TextProps> = ({
  children,
  size = 3.5,
  textAlign = "auto",
  color = AppColors.black,
  textStyles,
  textProps,
  onPress,
  textDecorationLine = "none",
  fontFamily = FontFamily.Roboto_Regular,
  containerStyles,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
      fontFamily: fontFamily,
    },
  });

  return (
    <Pressable disabled={!onPress} onPress={onPress} style={containerStyles}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const LargeText: FC<TextProps> = (props) => (
  <CustomText size={6.5} {...props} />
);
export const MediumText: FC<TextProps> = (props) => (
  <CustomText size={4.5} {...props} />
);
export const SmallText: FC<TextProps> = (props) => (
  <CustomText size={3} {...props} />
);
export const UnderLineText: FC<TextProps> = (props) => (
  <CustomText size={4.5} {...props} textDecorationLine="underline" />
);

export default CustomText;
