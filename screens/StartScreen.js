import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity } from "react-native";
import ManagerHomeScreen from "../screens/ManagerHomeScreen";

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <Background>
      <Logo />
      <Header>Welcome to Wosil !</Header>
      {/* <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph> */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate("ManagerHomeScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("SignupScreen")}
      >
        Sign Up
      </Button>
    </Background>
  );
}
