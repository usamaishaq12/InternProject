import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";

import CameraIcon from "~assets/SVG/cameraIcon";
import styles from "./styles";
import { DeleteIcon } from "~assets/SVG";

interface CameraButtonProps {
  onPress?: () => void;
  imageContainerStyle?: ViewStyle;
}

const CameraButton: React.FC<CameraButtonProps> = ({
  onPress,
  imageContainerStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.mainView, imageContainerStyle]}
      onPress={onPress}
    >
      <CameraIcon color="white" />
    </TouchableOpacity>
  );
};

export default CameraButton;
