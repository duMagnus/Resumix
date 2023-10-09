import { View } from "react-native";
import { Title, TitleContainer } from "./appTitle.styles";
import { useContext } from "react";
import { RecordContext } from "../../services/record/record.context";

export const AppTitle = () => {
  const { isRecording } = useContext(RecordContext);

  return (
    <TitleContainer>
      <View
        style={{
          height: 20,
          width: 20,
          backgroundColor: "#f25757",
          borderRadius: 10,
          marginRight: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 6,
            width: 6,
            backgroundColor: "#fff",
            borderRadius: isRecording ? 0 : 3,
          }}
        />
      </View>
      <Title>Resumix</Title>
    </TitleContainer>
  );
};
