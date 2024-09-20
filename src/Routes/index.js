import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import ScreenNames from "./routes";
import { selectIsLoggedIn } from "~redux/slices/user";
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
} from "~screens/auth";
import { HomeScreen } from "~screens/app";
import { Loader } from "~components";
import { AppColors } from "~utils";
import { FontFamily } from "~assets";
import CreateAccount from "~screens/auth/create-account";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.GETTINGSTARTED}
          screenOptions={{ header: () => false }}
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
