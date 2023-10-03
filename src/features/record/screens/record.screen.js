import React, { useContext, useState } from "react";
import { AnimatedRecordButton } from "../components/animated-record-button.component";
import { sendAudioToCloudFunction } from "../../../services/transcribe/transcribe.service";
import {
  getPermission,
  startRecording,
  stopRecording,
} from "../../../services/record/record.service";
import { BackgroundContainer } from "../components/record.styles";
import { LinearGradient } from "expo-linear-gradient";
import { HistoryContext } from "../../../services/history/history.context";

export const RecordScreen = () => {
  const [recordingObject, setRecordingObject] = useState(null);
  const [audioPermission, setAudioPermission] = useState(null);
  const { addToHistory } = useContext(HistoryContext);
  const [isLoading, setIsLoading] = useState(false);

  const record = async () => {
    if (!audioPermission) {
      setAudioPermission(getPermission());
    }
    if (recordingObject) {
      setIsLoading(true);
      const audioUri = await stopRecording(recordingObject);

      setRecordingObject(null);

      const summaryItem = await sendAudioToCloudFunction(audioUri);

      console.log(summaryItem);

      addToHistory(summaryItem);
      setIsLoading(false);
    } else {
      const newRecording = await startRecording(audioPermission);
      setRecordingObject(newRecording);
    }
  };

  return (
    <LinearGradient
      colors={["#212D40", "#11151c"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BackgroundContainer>
        <AnimatedRecordButton record={record} isLoading={isLoading} />
      </BackgroundContainer>
    </LinearGradient>
  );
};
