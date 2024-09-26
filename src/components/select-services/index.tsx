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
import { DropDownMenu, ServiceCustomModal } from "~components";
import { DropMenu } from "~assets/SVG";
interface Service {
  id: number;
  name: string;
  isSelected: boolean;
}
interface SelectServicesProps {
  onDonePressed: (value: Service[]) => void;
  mainViewContainer?: ViewStyle;
  children?: string;
}

const SelectServices: React.FC<SelectServicesProps> = ({
  onDonePressed,
  mainViewContainer,
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectServices, setSelectedServices] = useState<Service[]>([]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  interface Service {
    id: number;
    name: string;
  }
  interface FlatlistProps {
    item: Service;
  }
  const renderServicesName = ({ item }: FlatlistProps) => {
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
            data={selectServices}
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
      <ServiceCustomModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        title="Select Services"
        label="Done"
        onDonePress={(value) => {
          onDonePressed(value);
          toggleModal();
          setSelectedServices(value);
        }}
      />
    </TouchableOpacity>
  );
};

export default SelectServices;
