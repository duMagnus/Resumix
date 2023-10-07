import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CardSummary,
  CardTitle,
  LinearGradientOver,
  SummaryCardContainer,
} from "../components/history.styles";
import { useContext, useEffect } from "react";
import { HistoryContext } from "../../../services/history/history.context";

export const HistoryScreen = ({ navigation, route }) => {
  const { history } = useContext(HistoryContext);

  const navigateToHistoryDetail = (item) => {
    navigation.navigate("SummaryDetail", { summary: item });
  };

  useEffect(() => {
    if (route.params) {
      const { summary } = route.params;
      if (summary) {
        navigateToHistoryDetail(summary);
      }
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#212D40", "#11151c"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {!history.length ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <CardTitle style={{ textAlign: "center" }}>
              Você ainda não possui nenhum resumo, vá para a página de gravação
              e clique no botão vermelho para começar.
            </CardTitle>
          </View>
        ) : (
          <FlatList
            style={{ marginTop: 10 }}
            data={history}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigateToHistoryDetail(item)}>
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
                      start={{ x: 0, y: 0.4 }}
                      end={{ x: 0, y: 0.95 }}
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
