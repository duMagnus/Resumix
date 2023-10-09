import { Animated, TouchableOpacity } from "react-native";
import {
  CardSummary,
  CardTitle,
  LinearGradientOver,
  SummaryCardContainer,
  CardIconContainer,
  CardOptionsIconContainer,
  AnimatedOptionsContainer,
} from "./history.styles";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useRef, useState } from "react";
import { HistoryContext } from "../../../services/history/history.context";

export const SummaryCard = ({ item, navigateToCardDetail }) => {
  const { history, removeFromHistory } = useContext(HistoryContext);

  const [showOptions, setShowOptions] = useState(false);
  // const fixAnim = useRef(new Animated.Value(0)).current;
  const deleteAnim = useRef(new Animated.Value(0)).current;

  const optionsAnimDuration = 250;

  openOptions = () => {
    // Animated.timing(fixAnim, {
    //   toValue: showOptions ? 0 : 45,
    //   duration: optionsAnimDuration,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(deleteAnim, {
      toValue: showOptions ? 0 : 45,
      duration: optionsAnimDuration,
      useNativeDriver: true,
    }).start();
    setTimeout(
      () => setShowOptions(!showOptions),
      showOptions ? optionsAnimDuration + 100 : 0
    );
  };

  return (
    <>
      <CardOptionsIconContainer onPress={openOptions}>
        <Ionicons name="ellipsis-horizontal-sharp" size={20} color="white" />
      </CardOptionsIconContainer>
      {showOptions && (
        <>
          {/* <AnimatedOptionsContainer
            style={{
              transform: [{ translateY: fixAnim }],
            }}
          >
            <CardIconContainer>
              <Ionicons name="pin" size={20} color="white" />
            </CardIconContainer>
          </AnimatedOptionsContainer> */}
          <AnimatedOptionsContainer
            style={{
              transform: [{ translateY: deleteAnim }],
            }}
          >
            <CardIconContainer
              onPress={() => {
                removeFromHistory(item);
                setShowOptions(false);
              }}
            >
              <Ionicons name="trash" size={20} color="white" />
            </CardIconContainer>
          </AnimatedOptionsContainer>
        </>
      )}

      <TouchableOpacity onPress={() => navigateToCardDetail(item)}>
        <SummaryCardContainer>
          <CardTitle>{item.title}</CardTitle>
          <CardSummary>{item.summary}</CardSummary>
          <LinearGradientOver />
        </SummaryCardContainer>
      </TouchableOpacity>
    </>
  );
};
