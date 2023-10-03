import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export const SummaryCardContainer = styled.View`
  background-color: #11151c;
  margin: 6px 12px;
  border-radius: 15px;
  max-height: 200px;
  min-height: 200px;
`;

export const CardTitle = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
  font-size: 16px;
  margin: 30px 30px 12px 30px;
`;

export const CardSummary = styled.Text`
  color: white;
  font-family: AROneSans-Medium;
  margin: 0 30px 30px 30px;
`;

export const LinearGradientOver = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`;

export const SummaryDetailScrollingContainer = styled.ScrollView`
  margin-top: 30px;
  padding: 30px;
`;

export const DetailTitle = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const DetailSummary = styled.Text`
  color: white;
  font-family: AROneSans-Medium;
`;

export const SummaryDetailContainer = styled.View`
  flex: 1;
  background-color: #11151c;
`;

export const TranscriptionButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 90px;
  right: 20px;
  padding: 15px;
  background-color: #485265;
  border-radius: 30px;
`;

export const TranscriptionButtonLabel = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
  font-size: 12px;
`;
