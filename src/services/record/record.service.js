import { Audio } from "expo-av";
import { useState } from "react";
import * as FileSystem from "expo-file-system";

export const stopRecording = async (recording) => {
  try {
    console.log("Stopping Recording");
    await recording.stopAndUnloadAsync();
    const recordingUri = recording.getURI();

    const fileName = `recording-${Date.now()}.m4a`;

    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "recordings/",
      { intermediates: true }
    );
    await FileSystem.moveAsync({
      from: recordingUri,
      to: FileSystem.documentDirectory + "recordings/" + `${fileName}`,
    });
    return fileName;
  } catch (error) {
    console.error("Failed to stop recording", error);
  }
};

export const getPermission = async () => {
  await Audio.requestPermissionsAsync()
    .then((permission) => {
      console.log("Permission Granted: " + permission.granted);
      return permission.granted;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const startRecording = async (audioPermission) => {
  try {
    if (audioPermission) {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    }

    const newRecording = new Audio.Recording();
    console.log("Starting Recording");
    await newRecording.prepareToRecordAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    await newRecording.startAsync();

    return newRecording;
  } catch (error) {
    console.error("Failed to start recording", error);
  }
};

export const playRecording = async (recordingUri) => {
  console.log(recordingUri);
  const playbackObject = new Audio.Sound();
  await playbackObject.loadAsync({
    uri: FileSystem.documentDirectory + "recordings/" + `${recordingUri}`,
  });
  await playbackObject.playAsync();
  // await playbackObject.unloadAsync();
};
