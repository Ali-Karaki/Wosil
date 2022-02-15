import { useNavigation } from "@react-navigation/core";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManageDriversScreen from "./ManageDriversScreen";
import DrawerItems from "../constants/DrawerItems";


import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { auth } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";

const ManagerHomeScreen = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
 

  return (
    <>  
     
     
      <View>
        <SafeAreaView style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <Text style = {styles.buttonText}> Never Gonna Give you up, Never gonna let you down </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "purple",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  sendorder: {},
  slot: {
    color: "black",
    fontSize: 20,
    padding: 10,
    justifyContent: "space-evenly",
  },
  welcText: {
    fontSize: 25,
    fontStyle: "italic",
  },
  welcome: {
    backgroundColor: "purple",
    marginTop: "2%",
  },
  buttonText: {
    marginTop: "20%",
    backgroundColor: "purple",
  },
  ordersbox: {
    flexDirection: "row",
    height: "10%",
    padding: 20,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#800080",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 4,
  },
  outline: {
    backgroundColor: "white",
    marginTop: 8,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: "40%",
    textAlign: "right",
  },
  RectangleShapeView: {
    height: 180,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    marginVertical: "10%",
    borderColor: "#000",
    borderWidth: 3,
    margin: "30%",
    width: "30%",
  },
  //emptyspace: { marginVertical: "25%" },
  container2: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "purple",
  },
});
export default ManagerHomeScreen;
