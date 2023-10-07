import React, { createContext, useContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const add = (item) => {
    if (!history.length) {
      setHistory([item]);
    }
    setHistory([item, ...history]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory: add }}>
      {children}
    </HistoryContext.Provider>
  );
};
