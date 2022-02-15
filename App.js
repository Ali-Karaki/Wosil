import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";  
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManageDriversScreen from "./screens/ManageDriversScreen";
import DrawerItems from "./constants/DrawerItems";

import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import { AppRegistry, TouchableOpacity } from "react-native-web";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("LoginScreen");
    })
    .catch((error) => alert(error.message));
};


function login(){
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
    >
        <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignupScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />

        <Stack.Screen
          options = {{headerShown : false}}
          name="ManagerHomeScreen"
          component={Root}
        />
    </Stack.Navigator>
  );
}
function Root() {
  return (
    <Drawer.Navigator
      options = {{headerShown : false}}
      >
      <Drawer.Screen 
        name="Home"
        component={ManagerHomeScreen} />
      <Drawer.Screen 
      name="Drivers" 
      component={ManageDriversScreen} />
    </Drawer.Navigator>
  );
}

 
export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
     </NavigationContainer> 
      
  );
}

AppRegistry.registerComponent("wosil", () => App);
