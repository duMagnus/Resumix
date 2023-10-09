import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const saveHistory = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@historyList`, jsonValue);
    } catch (e) {
      console.log("Error storing:", e);
    }
  };

  const loadHistory = async () => {
    try {
      const value = await AsyncStorage.getItem(`@historyList`);
      if (value !== null) {
        setHistory(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading history:", e);
    }
  };

  const add = (item) => {
    if (!history.length) {
      setHistory([item]);
    } else {
      setHistory([item, ...history]);
    }
  };

  const remove = (item) => {
    const newHistory = history.filter((x) => x !== item);
    setHistory(newHistory);
  };

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory: add,
        loadHistory,
        removeFromHistory: remove,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
