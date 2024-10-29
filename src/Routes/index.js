import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useDispatch, useSelector } from "react-redux";
import ScreenNames from "./routes";

import {
  selectIsLoggedIn,
  setIsLoggedIn,
  setUserMeta,
} from "~redux/slices/user";
import {
  CompleteProfile,
  GettingLogin,
  GettingStarted,
  IdentityVerification,
  LocationScreen,
  LoginScreen,
  PdfForm,
  PrivacyPolicy,
  ResetPassword,
  SelectRadius,
  ServiceAreas,
  TermsAndConditions,
  UploadPictures,
  VerificationCode,
  ProfileScreen,
  OrderScreen,
  HomeScreen,
  DateScreen,
  ServiceOrderRequests,
} from "~screens/auth";
import { Loader, TabColor } from "~components";

import CreateAccount from "~screens/auth/create-account";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontFamily, Icons } from "~assets";
import { Image, Text, View } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === ScreenNames.HOMESCREEN) {
            icon = focused ? Icons.tabChuckLogo : Icons.tabChuckLogo;
          } else if (route.name === ScreenNames.DATESCREEN) {
            icon = focused ? Icons.dateIcon : Icons.dateIcon;
          } else if (route.name === ScreenNames.ORDERSCREEN) {
            icon = focused ? Icons.orderIcon : Icons.orderIcon;
          } else if (route.name === ScreenNames.PROFILESCREEN) {
            icon = focused ? Icons.profileIcon : Icons.profileIcon;
          } else {
            icon = Icons.develo;
          }
          return (
            <View
              style={{
                width: width(14),
                height: height(4.8),
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused
                  ? AppColors.solidGreen
                  : AppColors.black,
                opacity: focused ? 2 : 0.5,
              }}
            >
              <Image source={icon} style={{ width: size, height: size }} />
            </View>
          );
        },
        tabBarStyle: {
          height: height(8),
          paddingBottom: height(1.8),
        },
        tabBarActiveTintColor: AppColors.fullBlack,
        tabBarInactiveTintColor: AppColors.lightGrey,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={ScreenNames.HOMESCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? AppColors.fullBlack : AppColors.lightGrey,
                fontSize: width(1.9),
                fontFamily: focused ? FontFamily.Roboto_Bold : "normal",
              }}
            >
              Dashboard
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name={ScreenNames.DATESCREEN}
        component={DateScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? AppColors.fullBlack : AppColors.lightGrey,
                fontSize: width(1.9),
                fontFamily: focused ? FontFamily.Roboto_Bold : "normal",
              }}
            >
              Schedule
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.ORDERSCREEN}
        component={OrderScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? AppColors.fullBlack : AppColors.lightGrey,
                fontSize: width(1.9),
                fontFamily: focused ? FontFamily.Roboto_Bold : "normal",
              }}
            >
              Orders
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.PROFILESCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? AppColors.fullBlack : AppColors.lightGrey,
                fontSize: width(1.9),
                fontFamily: focused ? FontFamily.Roboto_Bold : "normal",
              }}
            >
              account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  console.log(isLogin, ">>>>");
  const dispatch = useDispatch();

  function onAuthStateChanged(user) {
    if (user) {
      // console.log("users>>>", user);
      dispatch(setUserMeta({ email: user?.email, uid: user?.uid }));
    }
  }

  const getDataFromFire = async () => {
    try {
      const id = auth().currentUser.uid;
      await firestore()
        .collection("Users")
        .doc(id)
        .get()
        .then((documentSnapshot) => {
          console.log("User exists: ", documentSnapshot.exists);
          if (documentSnapshot.exists) {
            console.log("User data>>>>>>: ", documentSnapshot.data());
            dispatch(setUserMeta(documentSnapshot.data()));
            dispatch(setIsLoggedIn(true));
          }
        });
    } catch (error) {
      console.log("Route Error while fetching data>>>", error);
    }
  };
  React.useEffect(() => {
    getDataFromFire();
  }, []);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={ScreenNames.GETTINGSTARTED}
        >
          <Stack.Screen
            name={ScreenNames.GETTINGSTARTED}
            component={GettingStarted}
          />
          <Stack.Screen
            name={ScreenNames.GETTINGLOGIN}
            component={GettingLogin}
          />
          <Stack.Screen
            name={ScreenNames.RESETPASSWORD}
            component={ResetPassword}
          />
          <Stack.Screen
            name={ScreenNames.CREATEACCOUNT}
            component={CreateAccount}
          />
          <Stack.Screen
            name={ScreenNames.PRIVACYPOLICY}
            component={PrivacyPolicy}
          />
          <Stack.Screen
            name={ScreenNames.TERMSANDCONDITIONS}
            component={TermsAndConditions}
          />
          <Stack.Screen
            name={ScreenNames.COMPLETEPROFILE}
            component={CompleteProfile}
          />
          <Stack.Screen
            name={ScreenNames.VERIFICATIONCODE}
            component={VerificationCode}
          />
          <Stack.Screen
            name={ScreenNames.UPLOADPICTURES}
            component={UploadPictures}
          />
          <Stack.Screen
            name={ScreenNames.LOCATIONSCREEN}
            component={LocationScreen}
          />
          <Stack.Screen
            name={ScreenNames.IDENTITYVERIFICATION}
            component={IdentityVerification}
          />
          <Stack.Screen
            name={ScreenNames.SERVICEAREAS}
            component={ServiceAreas}
          />
          <Stack.Screen
            name={ScreenNames.SELECTRADIUS}
            component={SelectRadius}
          />
          <Stack.Screen name={ScreenNames.PDFFORM} component={PdfForm} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen
            name={ScreenNames.SERVICEORDERREQUESTS}
            component={ServiceOrderRequests}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
