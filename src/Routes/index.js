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
  verificationCode,
  HomeScreen,
} from "~screens/auth";
import { Home } from "~screens/app";
import { Loader } from "~components";

import CreateAccount from "~screens/auth/create-account";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
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
          initialRouteName={ScreenNames.HOMESCREEN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOMESCREEN} component={HomeScreen} />
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
            options={{}}
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
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
