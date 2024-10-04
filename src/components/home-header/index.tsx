import React from "react";
import {
  Image,
  ImageProps,
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { BackArrow, Chat, Notification } from "~assets/SVG";
import { Icons } from "~assets";

interface HomeHeaderProps {
  logo?: StyleProp<ImageProps>;
  header?: StyleProp<ViewStyle>;
  headerContainer?: StyleProp<ViewStyle>;
  chat?: StyleProp<ViewStyle>;
  notification?: StyleProp<ViewStyle>;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  header,
  headerContainer,
  logo,
  chat,
  notification,
}) => {
  return (
    <View style={[styles.viewContainer, headerContainer]}>
      <View style={[styles.header, header]}>
        <Image source={Icons.logo} style={[styles.logo, logo]} />
        <Pressable style={[styles.chat, chat]}>
          <Chat />
        </Pressable>
        <Pressable style={[styles.notification, notification]}>
          <Notification />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
