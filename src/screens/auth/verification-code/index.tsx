import React, { useState } from "react";
import { View } from "react-native";
import { FontFamily, Icons } from "~assets";
import {
  Button,
  CustomHeader,
  CustomModal,
  LargeText,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import { BackArrow, OpenEye, TickCircle } from "~assets/SVG";
import ScreenNames from "~Routes/routes";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import auth from "@react-native-firebase/auth";

import CustomText from "~components/text";
import GlobalMethods from "~utils/method";
import { useDispatch } from "react-redux";
import { setUserMeta } from "~redux/slices/user";
import { RouteProp, useRoute } from "@react-navigation/native";

export default function VerificationCode({ navigation }) {
  const [text, setChangeText] = useState("");
  const [code, setChangeCode] = useState("");
  const [modal, setModal] = useState(false);
  const [nodal, setNodal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState();
  const [confirmation, setConfirmation] = useState(null);

  const dispatch = useDispatch();

  interface VerificationCodeParams {
    confirm: any;
  }

  const route = useRoute<RouteProp<{ params: VerificationCodeParams }>>();
  const { confirm } = route.params;

  const handleOtpSubmit = () => {
    const body = { text, code };
    console.log(body);
    navigation.navigate(ScreenNames.UPLOADPICTURES);
  };

  async function sendOtp(phoneCode: string) {
    setLoader(true);
    try {
      const confirmation = await auth().verifyPhoneNumber(phoneCode);
      console.log(confirmation, "confirmation");
      setConfirmation(confirmation);
      console.log("OTP sent successfully");
      GlobalMethods.successMessage("OTP sent successfully");
      setLoader(false);
      setNodal(!nodal);
    } catch (e) {
      console.log("OTP Failed", e);
      GlobalMethods.errorMessage("OTP Failed");
    }
  }

  const validationOtp = () => {
    if (!text || text.length < 4) {
      GlobalMethods.errorMessage("Please enter OTP code");
    } else if (!code || code.length < 4) {
      GlobalMethods.errorMessage("Please enter the OTP code");
    } else {
      verifyOtp(code);
    }
  };

  // function onAuthStateChanged(user) {
  //   if (!user) {
  //     dispatch(setUserMeta(user));
  //   }
  // }
  // React.useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  const verifyOtp = async (code: any) => {
    try {
      const credential = auth?.PhoneAuthProvider?.credential(
        confirm?.verificationId,
        code
      );

      if (!credential) {
        console.log("No credential found");
        return;
      }
      const userData = await auth().signInWithCredential(credential);
      console.log("User data:", userData);
      setUser(userData?.user);
      setModal(true);
    } catch (error) {
      if (error && typeof error === "object" && "code" in error) {
        if (error.code === "auth/invalid-verification-code") {
          GlobalMethods.errorMessage("Invalid code.");
        } else {
          console.log("Error linking account:", error);
        }
      } else {
        console.log("Error:", error);
      }
    }
  };
  return (
    <ScreenWrapper>
      <CustomHeader
        title="Enter Verification Code"
        onBackPress={() => navigation.navigate(ScreenNames.COMPLETEPROFILE)}
      />
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <LargeText
            // containerStyles={styles.viewHeaderText}
            textStyles={styles.mainHeaderText}
            children={"Please enter the code we sent to your phone number"}
          />
          <OTPInputView
            style={styles.otpContainer}
            pinCount={6}
            keyboardAppearance="dark"
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighlightBase}
            onCodeChanged={(text) => {
              console.log(`Code is${text}`), setChangeText(text);
            }}
            onCodeFilled={(code) => {
              console.log(`Code is${code}`), setChangeCode(code);
            }}
          />
          <Button
            containerStyle={styles.buttonContainer}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Verify"}
            onPress={() => {
              validationOtp();
            }}
          />
          <SmallText
            textStyles={styles.footerTextStyle}
            size={3.8}
            children={"Didn't receive the code?"}
          />
          <Button
            loader={loader}
            variant="secondary"
            buttonTextColor={AppColors.fullBlack}
            children={"Send Again"}
            onPress={() => {
              sendOtp("+1 650 555 1234");
            }}
          />
          <CustomModal
            textStyle={styles.modalText}
            isVisible={modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            title="Your account has been verified"
            label="Continue"
            backdropOpacity={0.3}
            onBackdropPress={() => setModal(!modal)}
            onContinuePress={() => {
              setModal(!modal);
              handleOtpSubmit();
            }}
          />
          <CustomModal
            textStyle={styles.modalText}
            isVisible={nodal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            title="We sent you a new 4 digit code to your phone number"
            label="Continue"
            backdropOpacity={0.3}
            onContinuePress={() => setNodal(!nodal)}
            onBackdropPress={() => setNodal(!nodal)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
