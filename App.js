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
import CustomDrawer from "./components/CustomDrawer";
import { IconBase } from "react-icons";

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
      options={{ headerShown: false }}
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
          options={{ headerShown: false }}
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
        drawerContent = {props => <CustomDrawer {...props} /> }
        screenOptions ={{
          headerTintColor:"#660066",
          headerBackgroundContainerStyle : {
            color:"purple"
          },
          drawerActiveTintColor:"#660066",
          drawerLabelStyle :{
            marginLeft : -25,
            fontFamily:"Roboto-Medium",
            fontSize:15
          },
      }}>
      <Drawer.Screen 
        name="Home"
        component={ManagerHomeScreen} 
         options = {{
          drawerIcon: ({color}) => (<Ionicons name="md-home"size={22} color = {color}/>)
         }}
         />
      <Drawer.Screen 
      name="Drivers" 
      options = {{
        drawerIcon: ({color}) => (<GiCarWheel name="GiCarWheel" size={22} color = {color} />)
        
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


