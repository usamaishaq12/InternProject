import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper, TabHeader } from "~components";

const OrderScreen = () => {
  const [selected, setSelected] = useState("All");
  const onPress = (value: string) => {
    console.log("order value >>>>>>>>>>>>>>>>>>>>>>>>>>>", value);
    setSelected(value);
  };
  return (
    <ScreenWrapper
      headerUnScrollable={() => (
        <TabHeader
          title="Orders"
          focused={selected}
          listArray={[
            {
              name: "All",
            },
            { name: "Upcoming" },
            { name: "In Progress" },
            { name: "Completed" },
            { name: "Cancelled" },
          ]}
          onPress={onPress}
        />
      )}
    ></ScreenWrapper>
  );
};

export default OrderScreen;
