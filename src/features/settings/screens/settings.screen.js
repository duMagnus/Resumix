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
  LogInButton,
  OptionDescription,
  OptionTitle,
  ProfileContainer,
  ProfileEmail,
  ProfileName,
  ProfilePicture,
  RegisterButton,
  SettingsContainer,
  SettingsOptionContainer,
  SignInButton,
} from "./settings.styles";
import { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const settingsMenu = [
    // {
    //   title: "Conta",
    //   target: () => {
    //     navigation.navigate("History");
    //   },
    //   description: "Detalhes da sua conta",
    // },
    {
      title: "Sair",
      target: () => {
        navigation.navigate("Record");
        //setUser(null);
      },
      description: "Sair da sua conta",
    },
  ];

  const { user } = useContext(AuthenticationContext);

  const handleAccountPress = () => {
    if (user) {
      navigation.navigate("AccountSettings");
    } else {
      navigation.navigate("AccountManager");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundView>
        <SettingsContainer>
          <ProfileContainer onPress={handleAccountPress}>
            <View>
              <ProfileName>
                {user ? user.name : "Faça login ou registre-se"}
              </ProfileName>
              <ProfileEmail>
                {user ? user.email : "para fazer algo"}
              </ProfileEmail>
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
