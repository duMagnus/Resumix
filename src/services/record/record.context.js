import { createContext, useState } from "react";

export const RecordContext = createContext();

export const RecordContextProvider = ({ children }) => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <RecordContext.Provider
      value={{
        isRecording,
        toggleRecording: () => setIsRecording(!isRecording),
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
