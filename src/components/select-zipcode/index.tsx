import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SmallText } from "~components/text";
import { ZipCodeModal } from "~components";
import { DropMenu } from "~assets/SVG";

interface Service {
  id: number;
  name: string;
  isSelected: boolean;
}
interface SelectZipCodeProps {
  onDonePressed: (value: Service[]) => void;
  mainViewContainer?: ViewStyle;
  children?: string;
  title?: string;
}

const SelectZipCode: React.FC<SelectZipCodeProps> = ({
  onDonePressed,
  mainViewContainer,
  children,
  title,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [SelectZipCode, setSelectedZipCode] = useState<ZipCode[]>([]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  interface ZipCode {
    id: number;
    name: string;
  }
  interface ZipCodeProps {
    item: ZipCode;
  }
  const renderServicesName = ({ item }: ZipCodeProps) => {
    return (
      <Pressable onPress={toggleModal} style={styles.flatListViewStyle}>
        <Text style={styles.flatListText}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <TouchableOpacity
      // activeOpacity={0.7}
      onPress={(e) => {
        e.stopPropagation;
        toggleModal();
      }}
      style={[styles.container, mainViewContainer]}
    >
      <View style={styles.flatListContainer}>
        <SmallText size={3} textStyles={styles.titleText} children={children} />
        <View>
          <FlatList
            data={SelectZipCode}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            scrollEnabled
            renderItem={renderServicesName}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <View style={styles.svgcontainer}>
        <DropMenu />
      </View>
      <ZipCodeModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        title={title}
        label="Done"
        onDonePress={(value) => {
          onDonePressed(value);
          toggleModal();
          setSelectedZipCode(value);
        }}
      />
    </TouchableOpacity>
  );
};

export default SelectZipCode;
