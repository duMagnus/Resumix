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
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <View
            style={{
              backgroundColor: "#313C51",
              width: "100%",
              height: 100,
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 15,
              paddingLeft: 30,
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <View>
              <Text style={{ color: "white", fontFamily: "AROneSans-Bold" }}>
                Fernanda Lauer Perazzoni
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "AROneSans-Regular",
                  fontSize: 12,
                }}
              >
                fernandalperazzoni@gmail.com
              </Text>
            </View>
            <Avatar.Icon
              size={70}
              icon="human"
              backgroundColor="#778DA9"
              style={{ borderColor: "white", borderWidth: 2 }}
            />
          </View>
          <FlatList
            data={settingsMenu}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "100%",
                    backgroundColor: "#313C51",
                    borderRadius: 50,
                    height: 80,
                    justifyContent: "center",
                    paddingHorizontal: 30,
                    marginBottom: 20,
                  }}
                  onPress={item.target}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "AROneSans-Bold",
                      fontSize: 18,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "AROneSans-Regular",
                      fontSize: 11,
                    }}
                  >
                    {item.description}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};
