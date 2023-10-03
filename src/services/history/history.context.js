import React, { createContext, useContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const add = (item) => {
    console.log("adding...", item);
    setHistory([...history, item]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory: add }}>
      {children}
    </HistoryContext.Provider>
  );
};
