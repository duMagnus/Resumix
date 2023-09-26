import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

export const AnimatedRecordButton = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [clicked, setClicked] = useState(false);
  const micTransitionDuration = 600;
  const [iconName, setIconName] = useState("mic");

  const [audioPermission, setAudioPermission] = useState(null);
  const [recording, setRecording] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [recordingUri, setRecordingUri] = useState(null);

  const getPermission = async () => {
    await Audio.requestPermissionsAsync()
      .then((permission) => {
        console.log("Permission Granted: " + permission.granted);
        setAudioPermission(permission.granted);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startRecording = async () => {
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
      setRecording(newRecording);
      setRecordingStatus("recording");
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  };

  const stopRecording = async () => {
    try {
      if (recordingStatus === "recording") {
        console.log("Stopping Recording");
        await recording.stopAndUnloadAsync();
        setRecordingUri(recording.getURI());

        // resert our states to record again
        setRecording(null);
        setRecordingStatus("stopped");
      }
    } catch (error) {
      console.error("Failed to stop recording", error);
    }
  };

  const getAction = async () => {
    if (!audioPermission) {
      getPermission();
    }

    gravar();

    if (recording) {
      const audioUri = await stopRecording(recording);
      if (audioUri) {
        console.log("Saved audio file to", savedUri);
      }
    } else {
      await startRecording();
    }
  };

  gravar = async () => {
    Animated.timing(fadeAnim, {
      toValue: clicked ? -280 : 0,
      duration: micTransitionDuration,
      useNativeDriver: true,
    }).start();
    setTimeout(
      () => setIconName(clicked ? "pause" : "mic"),
      micTransitionDuration - 100
    );
  };

  return (
    <Animated.View
      style={{
        transform: [{ translateY: fadeAnim }],
        position: "absolute",
        bottom: 100,
      }}
    >
      <TouchableOpacity
        style={[
          styles.recordButton,
          { backgroundColor: clicked ? "#f25757" : "gray" },
        ]}
        onPress={async () => {
          setClicked(!clicked);
          await getAction();
        }}
      >
        <Ionicons
          name={iconName}
          size={60}
          color={"white"}
          style={styles.micIcon}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  recordButton: {
    height: 180,
    width: 180,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  micIcon: {},
});
