import { FlatList, SafeAreaView, Text, View } from "react-native";
import {
  NoHistoryContainer,
  NoHistoryMessage,
} from "../components/history.styles";
import { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../../services/history/history.context";
import { SummaryCard } from "../components/summary-card.component";
import { BackgroundView } from "../../../infrastructure/navigation/index.styles";
import { Modal } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const HistoryScreen = ({ navigation, route }) => {
  const { history } = useContext(HistoryContext);

  const navigateToHistoryDetail = (item) => {
    navigation.navigate("SummaryDetail", { summary: item });
  };

  useEffect(() => {
    if (route.params?.summary) {
      const actualSummary = history.filter((x) => x === route.params.summary);
      if (actualSummary.length) {
        navigateToHistoryDetail(route.params.summary);
        route.params.summary = null;
      }
    }
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundView>
        {!history.length ? (
          <NoHistoryContainer>
            <NoHistoryMessage>
              Você ainda não possui nenhum resumo! Vá para a página de gravação
              e clique no botão vermelho para começar.
            </NoHistoryMessage>
          </NoHistoryContainer>
        ) : (
          <FlatList
            ListFooterComponent={() => {
              return <View style={{ marginBottom: 90 }} />;
            }}
            style={{ paddingTop: 10 }}
            data={history}
            renderItem={({ item }) => {
              return (
                <SummaryCard
                  item={item}
                  navigateToCardDetail={navigateToHistoryDetail}
                />
              );
            }}
          />
        )}
      </BackgroundView>
    </SafeAreaView>
  );
};
