import React, { useMemo, FC, ReactNode, useState } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { Loader, SmallText } from "~components";
import AppColors from "~utils/app-colors";
import styles from "./styles";
import { FontFamily } from "~assets";

interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "green" | "black";
  withShadow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: any | StyleProp<ViewStyle>;
  textProps?: any;
  disabled?: boolean;
  buttonTextColor?: string;
  onDonePressed?: () => void;
  loader?: boolean;
}

const Button: FC<ButtonProps> = ({
  onPress,
  onDonePressed,
  children = null, // Provide a default value here
  variant = "primary",
  withShadow = false,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  loader,
  buttonTextColor = AppColors.white,
}) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? styles.disableContainer
          : variant === "primary"
          ? styles.primaryContainer
          : variant === "green"
          ? styles.greenContainer
          : variant === "black"
          ? styles.blackContainer
          : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
    };
  }, [variant, withShadow, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      {...touchableOpacityProps}
    >
      {loader ? (
        <ActivityIndicator color={AppColors.white} size="small" />
      ) : (
        <SmallText
          color={
            disabled
              ? AppColors.black
              : variant === "green"
              ? AppColors.black
              : buttonTextColor
          }
          fontFamily={FontFamily.Roboto_Bold}
          size={3.8}
          textStyles={textStyle}
          textProps={textProps}
        >
          {children}
        </SmallText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
