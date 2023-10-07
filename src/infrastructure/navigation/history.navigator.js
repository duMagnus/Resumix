import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { HistoryScreen } from "../../features/history/screens/history.screen";
import { SummaryDetail } from "../../features/history/screens/summaryDetail.screen";

const HistoryStack = createStackNavigator();

export const HistoryNavigator = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
      initialRouteName="HistoryList"
    >
      <HistoryStack.Screen name="HistoryList" component={HistoryScreen} />
      <HistoryStack.Screen name="SummaryDetail" component={SummaryDetail} />
    </HistoryStack.Navigator>
  );
};
