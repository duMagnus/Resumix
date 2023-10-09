import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { AccountSettingsScreen } from "../../features/settings/screens/accountSettings.screen";
import { AccountManagerScreen } from "../../features/settings/screens/accountManager.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
      />
      <SettingsStack.Screen
        name="AccountManager"
        component={AccountManagerScreen}
      />
    </SettingsStack.Navigator>
  );
};
