import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import { AppRegistry } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});

AppRegistry.registerComponent("wosil", () => App);
