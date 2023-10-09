import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackgroundView } from "../../../infrastructure/navigation/index.styles";
import { CardTitle } from "../../history/components/history.styles";
import { Avatar, List } from "react-native-paper";
import {
  OptionDescription,
  OptionTitle,
  ProfileContainer,
  ProfileEmail,
  ProfileName,
  ProfilePicture,
  SettingsContainer,
  SettingsOptionContainer,
} from "./settings.styles";

export const SettingsScreen = ({ navigation }) => {
  const settingsMenu = [
    {
      title: "Conta",
      target: () => {
        navigation.navigate("History");
      },
      description: "Detalhes da sua conta",
    },
    {
      title: "Sair",
      target: () => {
        navigation.navigate("Record");
        //setUser(null);
      },
      description: "Sair da sua conta",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundView>
        <SettingsContainer>
          <ProfileContainer>
            <View>
              <ProfileName>Fernanda Lauer Perazzoni</ProfileName>
              <ProfileEmail>fernandalperazzoni@gmail.com</ProfileEmail>
            </View>
            <ProfilePicture />
          </ProfileContainer>
          <FlatList
            data={settingsMenu}
            renderItem={({ item }) => {
              return (
                <SettingsOptionContainer onPress={item.target}>
                  <OptionTitle>{item.title}</OptionTitle>
                  <OptionDescription>{item.description}</OptionDescription>
                </SettingsOptionContainer>
              );
            }}
          />
        </SettingsContainer>
      </BackgroundView>
    </SafeAreaView>
  );
};
