import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RecordScreen } from "../../features/record/screens/record.screen";
import { Settings, StyleSheet } from "react-native";
import { HistoryNavigator } from "./history.navigator";
import { HistoryContextProvider } from "../../services/history/history.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";

const TAB_ICON = {
  Record: ["md-mic", "md-mic-outline"],
  History: ["md-list", "md-list-outline"],
  Settings: ["md-settings", "md-settings-outline"],
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color, focused }) => {
      const iconName = TAB_ICON[route.name][focused ? 0 : 1];
      return <Ionicons name={iconName} size={30} color={color} />;
    },
    tabBarStyle: styles.bottomTab,
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: "#FFF",
    tabBarInactiveTintColor: "#778DA9",
  };
};

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <HistoryContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Record" component={RecordScreen} />
          <Tab.Screen name="History" component={HistoryNavigator} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </HistoryContextProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    bottom: 0,
    height: 70,
    backgroundColor: "#313C51",
    borderTopWidth: 0,
  },
});
