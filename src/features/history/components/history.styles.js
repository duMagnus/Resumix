import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, TouchableOpacity } from "react-native";

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

export const CardSummary = styled.Text.attrs({
  numberOfLines: 6,
})`
  color: white;
  font-family: AROneSans-Medium;
  margin: 0 30px 30px 30px;
`;

export const LinearGradientOver = styled(LinearGradient).attrs({
  colors: ["transparent", "#11151c"],
  start: { x: 0, y: 0.4 },
  end: { x: 0, y: 0.95 },
})`
  height: 100%;
  width: 100%;
  flex: 1;
  position: absolute;
  z-index: 99;
  border-radius: 15px;
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

export const CardTopBar = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  background-color: gray;
`;

export const CardIconContainer = styled(TouchableOpacity)`
  border-radius: 50px;
  width: 35px;
  height: 35px;
  background-color: #212d40;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  right: ${12 + 15}px;
  top: ${6 + 15}px;
`;

export const CardOptionsIconContainer = styled(CardIconContainer)``;

export const NoHistoryContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const NoHistoryMessage = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
  font-size: 16px;
  text-align: center;
`;

export const AnimatedOptionsContainer = styled(Animated.View)`
  position: absolute;
  right: 0;
  z-index: 98;
`;
