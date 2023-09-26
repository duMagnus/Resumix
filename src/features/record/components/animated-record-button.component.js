import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import {
  getPermission,
  startRecording,
  stopRecording,
} from "../../../services/record/record.service";

export const AnimatedRecordButton = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [clicked, setClicked] = useState(false);
  const micTransitionDuration = 600;
  const [iconName, setIconName] = useState("mic");

  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [recording, setRecording] = useState(null);
  const [audioPermission, setAudioPermission] = useState(null);
  const [recordingUri, setRecordingUri] = useState(null);

  const getAction = async () => {
    if (!audioPermission) {
      setAudioPermission(getPermission());
    }

    gravar();

    if (recording) {
      const { recording, recordingStatus, audioUri } = await stopRecording(
        recording,
        recordingStatus
      );
      if (audioUri) {
        console.log("Saved audio file to", savedUri);
      }
    } else {
      const { recording, recordingStatus } = await startRecording(
        audioPermission
      );
      setRecording(recording);
      setRecordingStatus(recordingStatus);
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
