import "react-native-gesture-handler";
import React from "react";
import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "resumix-3cad4.firebaseapp.com",
  projectId: "resumix-3cad4",
  storageBucket: "resumix-3cad4.appspot.com",
  messagingSenderId: "117875097630",
  appId: "1:117875097630:web:d80d9341fa461c6e22ae0f",
};

initializeApp(firebaseConfig);

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
      <Navigation />
    </>
  );
}
