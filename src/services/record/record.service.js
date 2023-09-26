import { Audio } from "expo-av";
import { useState } from "react";

export const stopRecording = async (recording, recordingStatus) => {
  try {
    if (recordingStatus === "recording") {
      console.log("Stopping Recording");
      await recording.stopAndUnloadAsync();
      return {
        recording: null,
        recordingStatus: "stopped",
        recordingUri: recording.getURI(),
      };
    }
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
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    await newRecording.startAsync();

    return {
      recording: newRecording,
      recordingStatus: "recording",
    };
  } catch (error) {
    console.error("Failed to start recording", error);
  }
};
