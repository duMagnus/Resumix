import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const BackgroundView = styled(LinearGradient).attrs({
  colors: ["#212D40", "#11151c"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;
