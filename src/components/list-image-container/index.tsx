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

import { DeleteIcon } from "~assets/SVG";
import styles from "./styles";

interface ListImageContainerProps {
  onPress?: () => void;
  viewContainerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  source?: any;
}

const ListImageContainer: React.FC<ListImageContainerProps> = ({
  onPress,
  viewContainerStyle,
  imageStyle,
  source,
}) => {
  return (
    <View style={[styles.mainView, viewContainerStyle]}>
      {source && (
        <Image
          source={source}
          resizeMode="cover"
          style={[styles.imageStyles, imageStyle]}
        />
      )}
      <Pressable style={styles.deleteIcon} onPress={onPress}>
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default ListImageContainer;
