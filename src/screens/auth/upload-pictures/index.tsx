import React, { Children, useEffect, useRef, useState } from "react";
import { FlatList, PermissionsAndroid, View } from "react-native";
import {
  Button,
  CustomCheckBox,
  DeletePickerModal,
  ImageAvatar,
  LargeText,
  ScreenWrapper,
  SmallText,
} from "~components";
import styles from "./styles";
import { AppColors } from "~utils";
import FilePickerModal, {
  FilePickerModalRef,
} from "~components/file-picker-modal";
import CameraButton from "~components/camera-button";
import { DeletePickerModalRef } from "~components/Delete-picker-modal";
import ListImageContainer from "~components/list-image-container";
import ScreenNames from "~Routes/routes";
import storage from "@react-native-firebase/storage";
import fireStore from "@react-native-firebase/firestore";
import { utils } from "@react-native-firebase/app";
import { array } from "yup";
import GlobalMethods from "~utils/method";
import { useSelector } from "react-redux";
import { selectUserMeta } from "~redux/slices/user";

export default function UploadPictures({ navigation }) {
  const user = useSelector(selectUserMeta);
  console.log(user, ">>>>>>>>>.");
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);
  const showDeletePickerRef = useRef<DeletePickerModalRef | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [galleryPicture, setGalleryPicture] = useState<string[]>([]);
  const [check, setCheck] = useState(false);
  const [loader, setLoader] = useState(false);

  // The putFile method returns a Task, which if required, allows you to hook into information such as the current upload progress:
  const uploadImageToStorage = async (imagePath: string) => {
    // console.log(" Uploading image :", imagePath);
    try {
      const reference = storage().ref(`images/${imagePath.split("/").pop()}`);
      const task = reference.putFile(imagePath);
      // task.on("state_changed", (taskSnapshot) => {
      //   console.log(
      //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      //   );
      // });
      await task;
      console.log("Profile picture Uploading to storage successful");
      const url = await reference.getDownloadURL();
      return url;
    } catch (error) {
      console.log("Profile picture Uploading to storage Failed", error);
      GlobalMethods.errorMessage(
        " Profile picture Uploading to storage Failed! "
      );
    }
  };

  // const addPictureDataToDatabase = async (downloadURL?: string) => {
  //   try {
  //     await fireStore()
  //       .collection("Users")
  //       .doc("1727378607556")
  //       .update({ ProfilePicture: downloadURL });
  //     console.log("Image path added ");
  //     GlobalMethods.successMessage(
  //       "Profile Picture added to Firebase successfully"
  //     );
  //     setLoader(false);
  //   } catch (error) {
  //     console.log("Error while updating", error);
  //     GlobalMethods.successMessage(
  //       "Error while uploading profile picture to firebase"
  //     );
  //   }
  // };

  const pictureSelection = (value?: any) => {
    console.log("Selected file:", value);
    if (value?.path) {
      setProfilePicture(value?.path);
      console.log("valuePath", value?.path);
      // uploadImageToStorage(value);
    }
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const uploadGalleryToStorage = async (imagePath: string) => {
    try {
      const reference = storage().ref(
        `GalleryImages/${imagePath.split("/").pop()}`
      );
      const task = reference.putFile(imagePath);
      // task.on("state_changed", (taskSnapshot) => {
      //   console.log(
      //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      //   );
      // });
      await task;
      console.log("Gallery Images uploaded to Storage succesfully");
      const url = await reference.getDownloadURL();
      return url;
    } catch (error) {
      console.log("Gallery Images Uploading to storage bucket failed! ", error);
    }
  };
  // const addGalleryDataToDatabase = async (downloadURL?: any) => {
  //   try {
  //     await fireStore()
  //       .collection("Users")
  //       .doc("1727378607556")
  //       .update({ GallerPictures: downloadURL });
  //     console.log(
  //       "Gallery Images uploaded to fireDataBase successfully",
  //       downloadURL
  //     );
  //     GlobalMethods.successMessage(
  //       "Gallery Images Uploading to FireBase success! "
  //     );
  //   } catch (error) {
  //     console.log("Error while updating", error);
  //     GlobalMethods.errorMessage(
  //       "Gallery Images Uploading to storage bucket failed! "
  //     );
  //   }
  // };

  //   if (galleryPicture) {
  //     uploadGalleryToStorage(galleryPicture);
  //   }
  // };
  const gallerySelection = async (value: string[]) => {
    const newImages = value
      .map((item: any) => {
        item.path;
        if (item.path) {
          value.push(item.path);
        }
        return item.path;
      })
      .filter(Boolean);
    setGalleryPicture(newImages);

    // addGalleryDataToDatabase(temp);
    // console.log("New Path", newImages);
  };

  const deleteHandler = (value: string[]) => {
    console.log(value, "Value to be deleted");
    const deletePics = galleryPicture.filter((item: any) => item !== value);
    setGalleryPicture(deletePics);
  };
  function handleSubmit() {
    const body = { profilePicture };
    showImagePickerRef.current?.show();
    console.log(body);
  }
  function handleGallerySubmit() {
    showDeletePickerRef.current?.show();
    console.log(galleryPicture);
  }

  const completeSubmit = async () => {
    if (!profilePicture) {
      GlobalMethods.errorMessage("Please Upload profile picture");
    } else if (galleryPicture.length <= 0) {
      GlobalMethods.errorMessage("Please Select equipment Images");
    } else {
      setLoader(true);
      const profileURL = await uploadImageToStorage(profilePicture);
      let temp = [];
      for (let i = 0; i < galleryPicture.length; i++) {
        const element = galleryPicture[i];

        const galleryUrl = await uploadGalleryToStorage(element);
        temp.push(galleryUrl);
      }

      const body = async () => {
        try {
          await fireStore().collection("Users").doc(user.uid).update({
            profilePicture: profileURL,
            isSelected: check,
            equipmentPictures: temp,
          });
          GlobalMethods.successMessage("Images uploaded successfully");
          console.log("Images uploaded successfully");
        } catch (error) {
          console.log("Error while updating", error);
          GlobalMethods.errorMessage(" Images Uploading to fireBase failed! ");
        }
      };
      setLoader(false);
      console.log("Upload pictures >>>>", body());

      navigation.navigate(ScreenNames.LOCATIONSCREEN);
    }
  };

  // const uploadingToFirestore = async (downloadURL?: any) => {
  //   try {
  //     await fireStore()
  //       .collection("Users")
  //       .doc("1727378607556")
  //       .update({  profilePicture: profileURL,
  //         isSelected: check,
  //         equipmentPictures: temp, });
  //     console.log(
  //       "Gallery Images uploaded to fireDataBase successfully",
  //       downloadURL
  //     );
  //     GlobalMethods.successMessage(
  //       "Gallery Images Uploading to FireBase success! "
  //     );
  //   } catch (error) {
  //     console.log("Error while updating", error);
  //     GlobalMethods.errorMessage(
  //       "Gallery Images Uploading to storage bucket failed! "
  //     );
  //   }
  // };

  // const gallerySelection = (value: any) => {
  //   console.log("Gallery file:", value);
  //   if (value) {
  //     const newImages = value.map((item: any) => item.path);
  //     const temp = [...galleryPicture, ...newImages];
  //     setGalleryPicture(temp);
  //     console.log("New path", temp);
  //   }
  // };

  interface renderDataProps {
    item: string[];
  }
  const renderData = ({ item }: renderDataProps) => {
    return (
      <ListImageContainer
        viewContainerStyle={styles.viewListContainerStyle}
        source={{ uri: item }}
        onPress={() => deleteHandler(item)}
      />
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <LargeText
            textStyles={styles.mainHeaderText}
            children={"Upload Picture"}
          />

          <SmallText
            textStyles={styles.smallText}
            children={"1. Upload a picture of your face"}
          />
          <View style={styles.cameraAndTextContainer}>
            <ImageAvatar
              iconStyle={styles.iconViewStyle}
              source={profilePicture ? { uri: profilePicture } : undefined}
              onPress={() => {
                handleSubmit();
              }}
            />
            <View style={styles.rowContainer}>
              <CustomCheckBox
                upperIcon
                lowerIcon
                check={check}
                onPress={() => setCheck(!check)}
              />
              <SmallText
                textStyles={styles.innerCheckText}
                children={"Use this as my profile picture"}
              />
            </View>
          </View>
          <SmallText
            textStyles={styles.smallText2}
            children={"2. Upload pictures of your truck and equipment"}
          />

          <FlatList
            ListHeaderComponentStyle={styles.listHeaderStyle}
            ListHeaderComponent={
              <CameraButton onPress={() => handleGallerySubmit()} />
            }
            contentContainerStyle={styles.contentContainerStyle}
            data={galleryPicture}
            renderItem={renderData}
          />

          <Button
            loader={loader}
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => completeSubmit()}
          />
        </View>
        <FilePickerModal
          ref={showImagePickerRef}
          onFilesSelected={pictureSelection}
        />
        <DeletePickerModal
          ref={showDeletePickerRef}
          onFilesSelect={gallerySelection}
        />
      </View>
    </ScreenWrapper>
  );
}
