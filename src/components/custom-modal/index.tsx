import React, { ReactNode, useState } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import styles from "./styles";
import Button from "~components/button";
import { TickCircle } from "~assets/SVG";
import { AppColors } from "~utils";
import CustomText from "~components/text";

interface CustomModalProps {
  label?: string;
  isVisible?: boolean;
  transparent?: boolean;
  tickIcon?: any;
  title?: String;
  animationIn?: any;
  animationOut?: any;
  avoidKeyboard?: boolean;
  coverScreen?: boolean;
  backdropOpacity?: number;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  textStyle?: any;
  textStyle2?: any;
  onDismiss?: () => void;
  containerStyle?: ViewStyle;
  svgStyle?: {};
}

const CustomModal: React.FC<CustomModalProps> = ({
  textStyle,
  textStyle2,
  label,
  isVisible,
  animationIn,
  animationOut,
  onBackButtonPress,
  onBackdropPress,
  tickIcon,
  title,
  onDismiss,
  containerStyle,
  svgStyle,

  avoidKeyboard,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={animationIn}
      animationOut={animationOut}
      onDismiss={onDismiss}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      style={styles.modal}
      backdropColor={AppColors.white}
      backdropOpacity={0}
    >
      <View style={[styles.modalContainer, textStyle2]}>
        <View style={[svgStyle]}>
          <TickCircle />
        </View>
        <CustomText textStyles={[styles.modalText, textStyle]}>
          {title}
        </CustomText>
        <Button
          containerStyle={[containerStyle]}
          variant="primary"
          onPress={onBackButtonPress}
        >
          {label}
        </Button>
      </View>
    </Modal>
  );
};

export default CustomModal;
