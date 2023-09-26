import React from "react";
import { Button, Text, View } from "react-native";
import { AnimatedRecordButton } from "../components/animated-record-button.component";

export const RecordScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E1DD",
      }}
    >
      <AnimatedRecordButton />
    </View>
  );
};
