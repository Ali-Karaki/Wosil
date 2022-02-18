import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AppRegistry } from "react-native-web";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import SignupScreen from "./screens/SignupScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "./components/Button";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
          />
          <Stack.Screen
            name="ManagerHomeScreen"
            component={ManagerHomeScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="StartScreen">
            <Drawer.Screen name="StartScreen" component={StartScreen} />
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
            <Drawer.Screen
              name="ManagerHomeScreen"
              component={ManagerHomeScreen}
            />
            <Drawer.Screen name="SignupScreen" component={SignupScreen} />
            <Drawer.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
const styles = StyleSheet.create({});

AppRegistry.registerComponent("wosil", () => App);
