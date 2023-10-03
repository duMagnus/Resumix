import { LinearGradient } from "expo-linear-gradient";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import {
  CardSummary,
  CardTitle,
  LinearGradientOver,
  SummaryCardContainer,
} from "../components/history.styles";
import { useContext } from "react";
import { HistoryContext } from "../../../services/history/history.context";

export const HistoryScreen = ({ navigation }) => {
  const { history, addToHistory } = useContext(HistoryContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#212D40", "#11151c"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {!history ? (
          <CardTitle>Sem histórico ainda!</CardTitle>
        ) : (
          <FlatList
            style={{ marginTop: 10 }}
            data={history}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SummaryDetail", { summary: item })
                  }
                >
                  <SummaryCardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary numberOfLines={6}>{item.summary}</CardSummary>
                    <LinearGradientOver
                      colors={["transparent", "#11151c"]}
                      style={{
                        flex: 1,
                        position: "absolute",
                        zIndex: 99,
                        borderRadius: 15,
                      }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                    />
                  </SummaryCardContainer>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};
