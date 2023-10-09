import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";

export const SettingsContainer = styled.View`
  padding: 20px 12px;
`;

export const ProfileContainer = styled.View`
  background-color: #313c51;
  height: 100px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
  padding-left: 30px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ProfileName = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
`;

export const ProfileEmail = styled.Text`
  color: white;
  font-family: AROneSans-Regular;
  font-size: 12px;
`;

export const ProfilePicture = styled(Avatar.Icon).attrs({
  size: 70,
  icon: "human",
  backgroundColor: "#778DA9",
})`
  border: 2px white;
`;

export const SettingsOptionContainer = styled(TouchableOpacity)`
  background-color: #313c51;
  border-radius: 50px;
  height: 80px;
  justify-content: center;
  padding: 20px 30px;
  width: 100%;
  margin-bottom: 15px;
`;

export const OptionTitle = styled.Text`
  color: white;
  font-family: AROneSans-Bold;
  font-size: 18px;
`;

export const OptionDescription = styled.Text`
  color: white;
  font-family: AROneSans-Regular;
  font-size: 11px;
`;
