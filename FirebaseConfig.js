import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "resumix-3cad4.firebaseapp.com",
  projectId: "resumix-3cad4",
  storageBucket: "resumix-3cad4.appspot.com",
  messagingSenderId: "117875097630",
  appId: "1:117875097630:web:d80d9341fa461c6e22ae0f",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
