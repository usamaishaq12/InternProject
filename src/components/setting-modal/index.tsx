import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { DropDownMenu } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import auth, { firebase } from "@react-native-firebase/auth";
import GlobalMethods from "~utils/method";
import ScreenNames from "~Routes/routes";

interface SettingModalProps {}

export interface SettingModalRef {
  show: () => void;
  hide: () => void;
}

const SettingModal: React.ForwardRefRenderFunction<
  SettingModalRef,
  SettingModalProps
> = ({ navigation }, ref) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));
  const signOut = () => {
    try {
      auth()
        .signOut()
        .then(() => console.log("User signed out successfully!"));
      GlobalMethods.successMessage("User signed out successfully!");
    } catch (error) {
      console.log("SignOut Error", error);
    }
  };

  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Logout"
      secondBtnText="Settings"
      onPressFirstBtn={() => {
        setVisible(false);
        setTimeout(() => {
          signOut();
          dispatch(setUserMeta(null));
          dispatch(setIsLoggedIn(false));
        }, 600);
      }}
      onPressSecondBtn={() => {
        navigation.navigate(ScreenNames.GETTINGSTARTED);
      }}
      onPressThirdBtn={() => {}}
      onClose={() => setVisible(false)}
    />
  );
};

export default forwardRef<SettingModalRef, SettingModalProps>(SettingModal);
