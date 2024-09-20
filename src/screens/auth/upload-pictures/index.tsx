import React, { Children, useRef, useState } from "react";
import { FlatList, View } from "react-native";
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

export default function UploadPictures({ navigation }) {
  const showImagePickerRef = useRef<FilePickerModalRef | null>(null);
  const showDeletePickerRef = useRef<DeletePickerModalRef | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [galleryPicture, setGalleryPicture] = useState<string[]>([]);
  const [check, setCheck] = useState(false);

  // interface del {
  //   id: number;
  //   index: number;
  //   path: string;
  // }
  // interface deleteListProps {
  //   value: string[];
  // }
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
    // galleryPicture;
    showDeletePickerRef.current?.show();
    console.log(galleryPicture);
  }

  const pictureSelection = (value: any) => {
    console.log("Selected file:", value);
    if (value && value.path) {
      setProfilePicture(value.path);
    }
  };

  // interface value {
  //   id: string;
  //   name: string;
  // }
  // interface newListProps {
  //   item: value;
  //   index: number;
  // }
  // const gallerySelection = (value: any) => {
  //   console.log("Gallery file:", value);
  //   if (value) {
  //     const newImages = value.map((item: any) => item.path);
  //     const temp = [...galleryPicture, ...newImages];
  //     setGalleryPicture(temp);
  //     console.log("New path", temp);
  //   }
  // };

  // interface item {
  //   id: number;
  //   index: number;
  //   path: string;
  // }
  // interface gallerySelectionProps {
  //   value: item;
  // }

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
              source={profilePicture ? { uri: profilePicture } : undefined}
              onPress={() => handleSubmit()}
            />
            <View style={styles.rowContainer}>
              <CustomCheckBox check={check} onPress={() => setCheck(!check)} />
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
            onPress={() => navigation.navigate(ScreenNames.LOCATIONSCREEN)}
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
