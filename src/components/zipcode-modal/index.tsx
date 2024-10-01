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

export interface ZipCode {
  id: number;
  name: string;
  isSelected: boolean;
}
interface ZipCodeFlatlist {
  item: ZipCode;
  index: number;
}

interface ZipCodeModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  onBackButtonPress: () => void;
  label?: string;
  title?: string;
  onDonePress: (value: ZipCode[]) => void;
}

const ZipCodeModal: React.FC<ZipCodeModalProps> = ({
  isVisible,
  onBackdropPress,
  onBackButtonPress,
  label,
  title,
  onDonePress,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [zipcode, setZipCode] = useState<ZipCode[]>([
    { id: 1, name: "12345", isSelected: false },
    { id: 2, name: "23456", isSelected: false },
    { id: 3, name: "34567", isSelected: false },
    { id: 4, name: "45678", isSelected: false },
    { id: 5, name: "56789", isSelected: false },
    { id: 6, name: "67890", isSelected: false },
    { id: 7, name: "78901", isSelected: false },
    { id: 8, name: "89012", isSelected: false },
    { id: 9, name: "90123", isSelected: false },
    { id: 10, name: "10123", isSelected: false },
    { id: 11, name: "20123", isSelected: false },
    { id: 12, name: "30123", isSelected: false },
    { id: 13, name: "40123", isSelected: false },
    { id: 14, name: "50123", isSelected: false },
    { id: 15, name: "60123", isSelected: false },
    { id: 16, name: "70123", isSelected: false },
    { id: 17, name: "80123", isSelected: false },
    { id: 18, name: "90123", isSelected: false },
    { id: 19, name: "01223", isSelected: false },
    { id: 20, name: "11113", isSelected: false },
    { id: 21, name: "09091", isSelected: false },
    { id: 22, name: "99911", isSelected: false },
    { id: 23, name: "77463", isSelected: false },
  ]);

  const searchData = zipcode.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderService = ({ item, index }: ZipCodeFlatlist) => {
    return (
      <TouchableOpacity
        style={styles.serviceItem}
        onPress={() => {
          let temp = [...zipcode];
          temp[index].isSelected = !temp[index].isSelected;
          setZipCode(temp);
        }}
      >
        <View style={styles.serviceContainer}>
          <CustomCheckBox onPress={undefined} check={item.isSelected} />
          <Text style={styles.serviceText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
            onDonePress(zipcode.filter((value) => value.isSelected))
          }
        >
          {label}
        </Button>
      </View>
    </Modal>
  );
};

export default ZipCodeModal;
