import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import { AppRegistry } from "react-native-web";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./screens/Profile";
import SettingsScreen from "./screens/Settings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SavedScreen from "./screens/Saved";
import ReferScreen from "./screens/Refer";
import DrawerItems from "./constants/DrawerItems";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            //options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            //options={{ headerShown: false }}
            name="SignupScreen"
            component={SignupScreen}
          />
          <Stack.Screen
            //options={{ headerShown: false }}
            name="ManagerHomeScreen"
            component={ManagerHomeScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator> */}

        <Drawer.Navigator
          drawerType="front"
          initialRouteName="Profile"
          drawerContentOptions={{
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 10 },
          }}
        >
          {DrawerItems.map((drawer) => (
            <Drawer.Screen
              key={drawer.name}
              name={drawer.name}
              options={{
                drawerIcon: ({ focused }) =>
                  drawer.iconType === "Material" ? (
                    <MaterialCommunityIcons
                      name={drawer.iconName}
                      size={24}
                      color={focused ? "#e91e63" : "black"}
                    />
                  ) : drawer.iconType === "Feather" ? (
                    <Feather
                      name={drawer.iconName}
                      size={24}
                      color={focused ? "#e91e63" : "black"}
                    />
                  ) : (
                    <FontAwesome5
                      name={drawer.iconName}
                      size={24}
                      color={focused ? "#e91e63" : "black"}
                    />
                  ),
              }}
              component={
                drawer.name === "Profile"
                  ? ProfileScreen
                  : drawer.name === "Settings"
                  ? SettingsScreen
                  : drawer.name === "Saved Items"
                  ? SavedScreen
                  : ReferScreen
              }
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});

AppRegistry.registerComponent("wosil", () => App);
