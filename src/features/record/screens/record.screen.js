import React, { useContext, useEffect, useState } from "react";
import { AnimatedRecordButton } from "../components/animated-record-button.component";
import { sendAudioToCloudFunction } from "../../../services/transcribe/transcribe.service";
import {
  getPermission,
  startRecording,
  stopRecording,
} from "../../../services/record/record.service";
import { BackgroundContainer } from "../components/record.styles";
import { HistoryContext } from "../../../services/history/history.context";
import { BackgroundView } from "../../../infrastructure/navigation/index.styles";
import { RecordContext } from "../../../services/record/record.context";

export const RecordScreen = ({ navigation }) => {
  const { addToHistory, loadHistory } = useContext(HistoryContext);
  const { toggleRecording } = useContext(RecordContext);
  const [recordingObject, setRecordingObject] = useState(null);
  const [audioPermission, setAudioPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const record = async () => {
    toggleRecording();
    if (!audioPermission) {
      setAudioPermission(getPermission());
    }
    if (recordingObject) {
      try {
        setIsLoading(true);

        const audioUri = await stopRecording(recordingObject);
        setRecordingObject(null);
        const summaryItem = await sendAudioToCloudFunction(audioUri);
        addToHistory(summaryItem);

        setIsLoading(false);

        navigation.navigate("History", {
          screen: "HistoryList",
          params: { summary: summaryItem },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      const newRecording = await startRecording(audioPermission);
      setRecordingObject(newRecording);
    }
  };

  return (
    <BackgroundView>
      <BackgroundContainer>
        <AnimatedRecordButton record={record} isLoading={isLoading} />
      </BackgroundContainer>
    </BackgroundView>
  );
};
