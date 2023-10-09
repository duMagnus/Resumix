import "react-native-gesture-handler";
import React from "react";
import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "AROneSans-Bold": require("./assets/fonts/AROneSans-Bold.ttf"),
    "AROneSans-Medium": require("./assets/fonts/AROneSans-Medium.ttf"),
    "AROneSans-Regular": require("./assets/fonts/AROneSans-Regular.ttf"),
    "AROneSans-SemiBold": require("./assets/fonts/AROneSans-SemiBold.ttf"),
  });

  return (
    <>
      <StatusBar style="auto" />
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </>
  );
}
