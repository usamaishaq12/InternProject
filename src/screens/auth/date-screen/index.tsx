import React, { Children, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, CustomHeader, ScreenWrapper } from "~components";
import { AppColors } from "~utils";

import ScreenNames from "~Routes/routes";
import { BackArrow, HeaderBackArrow, HeaderForwardArrow } from "~assets/SVG";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "./styles";
import { FontFamily } from "~assets";
import { height, width } from "~utils/dimensions";
// import moment from "moment-timezone";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  monthNamesShort: [
    "Jan",
    "Feb.",
    "Mar",
    "April",
    "May",
    "June",
    "July.",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "Tuesday",
};
LocaleConfig.defaultLocale = "fr";

export default function DateScreen({ navigation }: any) {
  const [selected, setSelected] = useState("");
  const first = { key: "first", color: AppColors.green };
  const second = { key: "second", color: AppColors.green };
  const third = { key: "third", color: AppColors.green };
  const marked = {
    "2024-10-18": { dots: [first] },
    "2024-10-17": { dots: [first, second, third] },
    "2024-10-21": { dots: [first, second, third], selected: true },
    "2024-10-15": { dots: [second, first], selected: true },
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        {/* <CustomHeader
          backIcon={<BackArrow />}
          title="Select date and time"
          onBackPress={() => navigation.goBack(ScreenNames.PDFFORM)}
        /> */}

        <Calendar
          renderArrow={(d: any) => {
            return d == "left" ? <HeaderBackArrow /> : <HeaderForwardArrow />;
          }}
          current={"2024-10-15"}
          onDayPress={(day: string) => {
            console.log("selected day", day);
            setSelected(day);
          }}
          markingType={"multi-dot"}
          markedDates={marked}
          style={styles.calendar}
          theme={{
            "stylesheet.calendar.header": {
              header: {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: width(2.5),
                marginTop: height(0.3),
                alignItems: "center",
              },
              monthText: {
                fontSize: width(5),
                fontFamily: FontFamily.Roboto_Bold,
                color: AppColors.fullBlack,
                marginVertical: height(2),
              },
              week: {
                marginVertical: height(2),
                flexDirection: "row",
                justifyContent: "space-around",
              },
              dayHeader: {
                marginTop: height(0),
                marginBottom: height(1),
                width: width(8),
                textAlign: "center",
                fontSize: width(3.8),
                fontFamily: FontFamily.Roboto_Bold,
                color: AppColors.fullBlack,
              },
            },
            "stylesheet.calendar.main": {
              monthView: {
                paddingHorizontal: width(0.5),
              },
              dayContainer: {
                alignItems: "center",
                justifyContent: "center",
                width: width(12),
                height: height(7.3),
              },
            },
            selectedDayBackgroundColor: AppColors.green,
          }}
        />
        {/* <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => navigation.navigate(ScreenNames.PDFFORM)}
          />
        </View> */}
        {/* </View> */}
      </View>
    </ScreenWrapper>
  );
}

// "stylesheet.calendar.header": {
//             header: {
//               backgroundColor: "red",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               width: width(100),
//               alignItems: "center",
//               // alignSelf: "center",
//               paddingVertical: height(1.5),
//               // marginBottom: height(0.6),
//               // paddingHorizontal: width(1.5),
//             },
//             monthText: {
//               fontSize: width(4.9),
//               fontFamily: FontFamily.Roboto_Bold,
//               color: "blue",
//               // alignSelf: "center",
//             },
//             week: {
//               backgroundColor: "yellow",
//               marginVertical: height(1.2),
//               flexDirection: "row",
//               justifyContent: "space-around",
//             },

//             dayHeader: {
//               marginTop: 2,
//               marginBottom: 7,
//               width: 32,
//               textAlign: "center",
//               fontSize: width(3.8),
//               fontFamily: FontFamily.Roboto_Bold,
//               color: "green",
//             },
//           },
//           "stylesheet.calendar.main": {
//             container: { backgroundColor: "purple" },
//             monthView: {
//               backgroundColor: AppColors.white,
//               paddingHorizontal: width(0.5),
//             },
//             dayContainer: {
//               backgroundColor: "brown",
//               width: width(12),
//               height: height(7.5),
//               alignItems: "center",
//               justifyContent: "center",
//             },
//           },

//           todayTextColor: AppColors.black,
//           dayTextColor: AppColors.black,
//           monthTextColor: AppColors.black,
//           textSectionTitleColor: AppColors.black,
//           selectedDayTextColor: AppColors.black,
//           dotColor: AppColors.black,
//           selectedDotColor: AppColors.black,
//         }}
