import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { AppColors } from "~utils";
import Button from "~components/button";
import CustomCheckBox from "~components/check-box";
import { number } from "yup";

export interface Service {
  id: number;
  name: string;
  isSelected: boolean;
}
interface ServiceFlatlist {
  item: Service;
  index: number;
}

interface ServiceCustomModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  onBackButtonPress: () => void;
  label: string;
  title: string;
  onDonePress: (value: Service[]) => void;
}

const ServiceCustomModal: React.FC<ServiceCustomModalProps> = ({
  isVisible,
  onBackdropPress,
  onBackButtonPress,
  label,
  title,
  onDonePress,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "Junk Removal", isSelected: false },
    { id: 2, name: "Land Scaping", isSelected: false },
    { id: 3, name: "Filter out", isSelected: false },
    { id: 4, name: "Service 4", isSelected: false },
    { id: 5, name: "Service 5", isSelected: false },
    { id: 6, name: "Service 6", isSelected: false },
    { id: 7, name: "Service 7", isSelected: false },
    { id: 8, name: "Service 8", isSelected: false },
    { id: 9, name: "Service 9", isSelected: false },
    { id: 10, name: "Service 10", isSelected: false },
    { id: 11, name: "Service 11", isSelected: false },
    { id: 12, name: "Service 12", isSelected: false },
    { id: 13, name: "Service 13", isSelected: false },
    { id: 14, name: "Service 14", isSelected: false },
    { id: 15, name: "Service 15", isSelected: false },
    { id: 16, name: "Service 16", isSelected: false },
    { id: 17, name: "Service 17", isSelected: false },
    { id: 18, name: "Service 18", isSelected: false },
    { id: 19, name: "Service 19", isSelected: false },
    { id: 20, name: "Service 20", isSelected: false },
    { id: 21, name: "Service 21", isSelected: false },
    { id: 22, name: "Service 22", isSelected: false },
    { id: 23, name: "Service 23", isSelected: false },
  ]);

  const searchData = services.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderService = ({ item, index }: ServiceFlatlist) => {
    return (
      <TouchableOpacity
        style={styles.serviceItem}
        onPress={() => {
          let temp = [...services];

          temp[index].isSelected = !temp[index].isSelected;
          setServices(temp);
        }}
      >
        <View style={styles.serviceContainer}>
          <CustomCheckBox onPress={undefined} check={item.isSelected} />
          <Text style={styles.serviceText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // console.log(
  //   "item",
  //   services.map((item) => {
  //     return { ...item, years };
  //   })
  // );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder=" Search"
          value={searchQuery}
          onChangeText={(data) => setSearchQuery(data)}
        />
        <FlatList
          scrollEnabled={true}
          data={searchData}
          renderItem={renderService}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button
          variant="primary"
          onPress={() =>
            onDonePress(
              services
                .filter((value) => value.isSelected)
                .map((item) => {
                  return { ...item, yearOfExperience: "0" };
                })
            )
          }
        >
          {label}
        </Button>
      </View>
    </Modal>
  );
};

export default ServiceCustomModal;
