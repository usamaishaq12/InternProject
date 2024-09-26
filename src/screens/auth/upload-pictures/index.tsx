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

export default function UploadPictures({ navigation }) {
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);
  const showDeletePickerRef = useRef<DeletePickerModalRef | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [galleryPicture, setGalleryPicture] = useState<string[]>([]);
  const [check, setCheck] = useState(false);

  // The putFile method returns a Task, which if required, allows you to hook into information such as the current upload progress:

  const uploadImageToStorage = async (imagePath: string) => {
    console.log(" Uploading image :", imagePath);
    try {
      // const reference = storage().ref(`images/${imagePath}`);
      const reference = storage().ref(`images/${imagePath.split("/").pop()}`);
      const task = reference.putFile(imagePath);
      task.on("state_changed", (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
        );
      });
      await task;
      const url = await reference.getDownloadURL();
      console.log("Image uploaded to the bucket!", url);

      await addPictureDataToDatabase(url);
    } catch (error) {
      console.log("Uploading image error => ", error);
    }
  };

  const addPictureDataToDatabase = async (downloadURL?: string) => {
    try {
      await fireStore()
        .collection("Users")
        .doc("1727378607556")
        .update({ ProfilePicture: downloadURL });
      console.log("Image path added ");
    } catch (error) {
      console.log("Error while updating", error);
    }
  };
  const pictureSelection = (value?: any) => {
    console.log("Selected file:", value);
    if (value?.path) {
      setProfilePicture(value?.path);
      console.log("valuePath", value?.path);
      handleImageUpload();
    }
  };

  const handleImageUpload = () => {
    if (profilePicture) {
      uploadImageToStorage(profilePicture);
    }
  };

  ////////////////////////////////////////////////

  const uploadGalleryToStorage = async (imagePath: string) => {
    console.log(" Uploading image :", imagePath);
    try {
      // const reference = storage().ref(`images/${imagePath}`);
      const reference = storage().ref(
        `GalleryImages/${imagePath.split("/").pop()}`
      );
      const task = reference.putFile(imagePath);
      task.on("state_changed", (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
        );
      });
      await task;
      const url = await reference.getDownloadURL();
      console.log("Gallery Images uploaded to the bucket!", url);

      await addGalleryDataToDatabase(url);
    } catch (error) {
      console.log("Uploading Gallery Images error => ", error);
    }
  };

  const addGalleryDataToDatabase = async (downloadURL?: string) => {
    let newDownloadUrl = [];

    try {
      await fireStore()
        .collection("Users")
        .doc("1727378607556")
        .update({ GallerPictures: downloadURL });
      console.log("Gallery Images path added ");
    } catch (error) {
      console.log("Error while updating", error);
    }
  };
  // const handleGalleryupload = () => {
  //   if (galleryPicture) {
  //     uploadGalleryToStorage(galleryPicture);
  //   }
  // };
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

  // const gallerySelection = (value: any) => {
  //   console.log("Gallery file:", value);
  //   if (value) {
  //     const newImages = value.map((item: any) => item.path);
  //     const temp = [...galleryPicture, ...newImages];
  //     setGalleryPicture(temp);
  //     console.log("New path", temp);
  //   }
  // };

  const gallerySelection = (value: string[]) => {
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

    for (let i = 0; i < newImages.length; i++) {
      const element = newImages[i];
      console.log(element);
      uploadGalleryToStorage(element);
    }
    console.log("New Path", newImages);
  };

  interface renderDataProps {
    item: string[];
  }

  const renderData = ({ item }: renderDataProps) => {
    return (
      <ListImageContainer
        viewContainerStyle={styles.viewListContainerStyle}
        onPress={() => deleteHandler(item)}
        source={{ uri: item }}
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
            // numColumns={3}
            data={galleryPicture}
            renderItem={renderData}
          />

          <Button
            containerStyle={styles.footerButton}
            variant="primary"
            buttonTextColor={AppColors.white}
            children={"Continue"}
            onPress={() => {
              // handleImageUpload();
              navigation.navigate(ScreenNames.LOCATIONSCREEN);
            }}
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

//   getPlatformPath({ path, uri }) {
//     return Platform.select({
//         android: { path },
//         ios: { uri }
//     })
// }

// const requestStoragePermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: "Storage Permission",
//         message: "This app needs access to your storage to upload images.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK",
//       }
//     );

//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("Storage permission granted");
//     } else {
//       console.log("Storage permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
// Call permission request on component mount
// useEffect(() => {
//   requestStoragePermission();
// }, []);
