// type autoCapitalizeProps = "none" | "sentences" | "words" | "characters";

import { ViewStyle } from "react-native";

export interface InputTextProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: {};
  secureTextEntry?: boolean;
  value?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  onChangeText?: {};
  maxLength?: number;
  numberOfLines?: number;
  autoFocus?: boolean;
  icon?: () => React.ReactNode;
  textStyle?: any;
  textStyleView?: any;
  pointerEvents?: "auto" | "none" | "box-none" | "box-only";
  mainViewContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
}
