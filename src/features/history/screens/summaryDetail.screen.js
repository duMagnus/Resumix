import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  DetailSummary,
  DetailTitle,
  SummaryDetailContainer,
  SummaryDetailScrollingContainer,
  TranscriptionButton,
  TranscriptionButtonLabel,
} from "../components/history.styles";

export const SummaryDetail = ({ route }) => {
  const { summary } = route.params;
  const [isSummary, setIsSummary] = useState(true);

  return (
    <>
      <SummaryDetailContainer>
        <SummaryDetailScrollingContainer>
          <DetailTitle>{summary.title}</DetailTitle>
          <DetailSummary>
            {isSummary ? summary.summary : summary.transcription}
          </DetailSummary>
          <View style={{ marginBottom: 120 }} />
        </SummaryDetailScrollingContainer>
        <TranscriptionButton onPress={() => setIsSummary(!isSummary)}>
          <TranscriptionButtonLabel>
            {isSummary ? "Ver transcrição original" : "Ver resumo"}
          </TranscriptionButtonLabel>
        </TranscriptionButton>
      </SummaryDetailContainer>
    </>
  );
};
