import { useNavigation } from "@react-navigation/core";
import React from "react";
import XBar from "react-native-x-bar";

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

const ManagerHomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <View>
        <SafeAreaView style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <XBar
              slots={[
                { style: styles.slot },
                [
                  {
                    children: <Text>Invite Drivers</Text>,
                    onPress: () => Alert.alert("slot one pressed"),
                  },
                  {
                    children: <Text>Track Drivers</Text>,
                    onPress: () => Alert.alert("slot two pressed"),
                  },
                  {
                    children: (
                      <TouchableOpacity onPress={handleSignOut}>
                        <Text>Sign Out</Text>
                      </TouchableOpacity>
                    ),
                  },
                ],
              ]}
              style={styles.bar}
            />
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
    hover: {
      borderColor: "yellow",
      borderWidth: 1,
    },
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
    backgroundColor: "purple",
  },
  ordersbox: {
    flexDirection: "row",
    height: "10%",
    padding: 20,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#800080",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
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
    borderRadius: "1rem",
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
