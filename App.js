import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/infrastructure/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RecordScreen } from "./src/features/record/screens/record.screen";

const TAB_ICON = {
  Record: ["md-mic", "md-mic-outline"],
  History: ["md-list", "md-list-outline"],
};

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ size, color, focused }) => {
      const iconName = TAB_ICON[route.name][focused ? 0 : 1];
      return <Ionicons name={iconName} size={40} color={color} />;
    },
    tabBarStyle: { height: 60, backgroundColor: "#E0E1DD", border: "none" },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: "#1B263B",
    tabBarInactiveTintColor: "#778DA9",
  };
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Record" component={RecordScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
