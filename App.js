import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import { Ionicons } from "@expo/vector-icons";
import { MdDeliveryDining} from "react-icons/md";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManageDriversScreen from "./screens/ManageDriversScreen";
import ManagerHomeScreen from "./screens/ManagerHomeScreen";
import { AppRegistry, TouchableOpacity } from "react-native-web";
import {GiCarWheel} from "react-icons/gi";
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
      screenOptions={{
        drawerstyle:{
          backgroundColor: "purple"
      
         },
        drawerContentOptions:{
          activeTintColor: '#fff', /* font color for active screen label */
          activeBackgroundColor: '#4770ff', /* bg color for active screen */
          inactiveTintColor: 'grey',
          itemStyle: {marginVertical: 5},
        }
     
      }}
     
      
      >
      
      <Drawer.Screen 
        name="Home"
        options = {{
          drawerIcon: ({focused, size}) => (
            <Ionicons
               name="md-home"
               size={size}
               color={focused ? '#7cc' : '#ccc'}
            />
        ),
        }}
        component={ManagerHomeScreen} />
      <Drawer.Screen 
      name="Drivers" 
      options = {{
          drawerIcon: ({focused,size}) => (
            <GiCarWheel
              size = {size}
              name  ="GiCarWheel"
              color={focused ? '#7cc' : '#ccc'}
              />
        ), 
      }}
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
