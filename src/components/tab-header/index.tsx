import { FlatList, StyleProp, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import ScreenWrapper from "~components/screen-wrapper";
import { TouchableOpacity } from "react-native";
import CustomText, { MediumText } from "~components/text";
import styles from "./styles";
import { AppColors } from "~utils";
import { FontFamily } from "~assets";
interface TabListProps {
  // value: string | undefined;
  name: string;
}
interface FlatListProps {
  item: TabListProps;
}
interface TabHeaderProps {
  title?: string;
  focused?: string;
  listArray: TabListProps[];
  onPress: (value: string) => void | undefined;
  containerStyles?: StyleProp<ViewStyle>;
}
const TabHeader: React.FC<TabHeaderProps> = ({
  title,
  focused,
  listArray,
  onPress,
  containerStyles,
}) => {
  const renderItem = ({ item }: FlatListProps) => {
    console.log(item, "");
    const onSecondPress = (value: string) => {
      onPress(value);
    };
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onSecondPress(item.name)}
      >
        <CustomText
          textStyles={[
            styles.text,
            {
              color: focused == item.name ? AppColors.green : AppColors.white,
            },
          ]}
          color="white"
          children={item.name}
          containerStyles={styles.tab}
        />

        <View
          style={[
            styles.bar,
            {
              backgroundColor:
                focused == item.name ? AppColors.green : AppColors.transparent,
            },
          ]}
        ></View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.container, containerStyles]}>
      {title && (
        <MediumText
          fontFamily={FontFamily.Roboto_Bold}
          color={AppColors.white}
          containerStyles={styles.headertext}
          children={"Orders"}
        />
      )}
      <FlatList
        data={listArray}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatlist}
      />
    </View>
  );
};

export default TabHeader;
