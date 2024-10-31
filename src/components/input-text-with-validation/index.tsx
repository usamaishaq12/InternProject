import React from "react";
import {
  TextInput,
  View,
  TextStyle,
  TextInputProps,
  Text,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import AppColors from "~utils/app-colors";
import { SmallText } from "~components/text";
// import { InputTextWithValidationProps } from "./types";
import { FontFamily } from "~assets";
import { OpenEye } from "~assets/SVG";
import { Control, Controller, FieldValues } from "react-hook-form";
interface errorProps {
  message?: string;
}
export interface InputTextWithValidationProps {
  // errors?: FieldErrors<FieldValues>;
  control?: Control<FieldValues>;
  error: errorProps | null;
  name: string;
  placeholder: string;
  props?: TextInputProps;
  label?: string;
  secureTextEntry?: boolean;
  textStyle?: ViewStyle;
  textStyleView?: ViewStyle;
  mainViewContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  icon?: () => React.ReactNode;
}

const InputTextWithValidation: React.FC<InputTextWithValidationProps> = ({
  error,
  control,
  name,
  label,
  placeholder,
  // placeholderTextColor = AppColors.snowWhite,
  secureTextEntry = true,
  // value,
  // autoCapitalize = "none",
  // onChange,
  // onBlur,
  // maxLength = 40,
  // numberOfLines = 1,
  // autoFocus = false,
  textStyle,
  textStyleView,
  mainViewContainer,
  icon = () => {},
  iconContainer,
  // pointerEvents = "auto",
  // keyboardType,
  props,
}) => (
  <View>
    <View style={[styles.mainViewContainer, mainViewContainer]}>
      <View style={[styles.viewContainer, textStyleView]}>
        <SmallText size={3} textStyles={styles.labelText}>
          {label}
        </SmallText>

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[
                  icon() ? styles.textInput1 : styles.textInput,
                  textStyle,
                ]}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                {...props}
                // placeholderTextColor={placeholderTextColor}
                // pointerEvents={"none"}
                // maxLength={maxLength}
                // numberOfLines={numberOfLines}
                // autoFocus={autoFocus}
                // keyboardType={keyboardType}
              />
            </>
          )}
        />
      </View>
      <View style={[styles.iconContainer, iconContainer]}>{icon()}</View>
    </View>
    {error && <Text style={styles.error}>{error?.message}</Text>}
  </View>
);

export default InputTextWithValidation;
