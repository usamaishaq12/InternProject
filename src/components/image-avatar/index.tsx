import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import CameraIcon from "~assets/SVG/cameraIcon";

interface ImageAvatarProps {
  onPress?: () => void;
  viewContainerStyle?: ViewStyle;
  iconViewStyle?: ViewStyle;
  cameraContainerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  size?: number;
  source?: ImageSourcePropType;
  showEdit?: boolean;
  iconStyle?: ViewStyle;
  color?: "black" | "white";
}

const ImageAvatar: React.FC<ImageAvatarProps> = ({
  onPress,
  viewContainerStyle,
  cameraContainerStyle,
  imageStyle,
  source,
  iconStyle,
  color,
}) => {
  return (
    <View style={[styles.mainContainer, viewContainerStyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.cameraContainer, cameraContainerStyle]}
        onPress={onPress}
      >
        {source && (
          <Image
            source={source}
            resizeMode="cover"
            style={[styles.imageStyles, imageStyle]}
          />
        )}

        <Pressable style={[iconStyle]} onPress={onPress}>
          <CameraIcon color={color} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default ImageAvatar;
