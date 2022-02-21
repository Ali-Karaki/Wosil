import React ,{useState,useEffect}from "react";
import {StyleSheet,ActivityIndicator,} from "react-native";
import { AppRegistry } from "react-native-web";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import SignupScreen from "./screens/SignupScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./firebase";
import { Ionicons } from "@expo/vector-icons";

import Sidebar from "./components/CustomDrawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const authenticateUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  if(isLoggedIn) {
    navigator.navigate('ManagerHomeScreen');
  }

  useEffect(() => {
    if (!isLoggedIn) {
      authenticateUser;
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) return <ActivityIndicator />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="StartScreen"
      >
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="ManagerHomeScreen"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home" 
        component={ManagerHomeScreen} 
        options = {{
          drawerIcon: ({color}) => (<Ionicons name="md-home"size={22} color = {color}/>)
          }}
     
       />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({});

AppRegistry.registerComponent("wosil", () => App);
