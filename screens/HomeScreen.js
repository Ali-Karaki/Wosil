import { useNavigation } from "@react-navigation/core";
import React from "react";
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

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <View style={styles.buttonText}>
        <div>
          <input placeholder="Search Bar" />
        </div>
      </View>
      <View>
        <SafeAreaView style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.RectangleShapeView}>
              <Text style={styles.input}>Order 1</Text>
              <Text style={styles.input}>Order # : 123456</Text>
              <Text style={styles.input}>Driver : James</Text>
              <Text style={styles.input}>Location: </Text>
            </View>
            <View style={[styles.RectangleShapeView, styles.emptyspace]}>
              <Text style={[styles.input, styles.emptyspace]}>Order 2</Text>
              <Text style={styles.input}>Order # : 147852</Text>
              <Text style={styles.input}>Driver : David</Text>
              <Text style={styles.input}>Location: </Text>
            </View>
            <View style={[styles.RectangleShapeView, styles.emptyspace]}>
              <Text style={styles.input}>Order 3</Text>
              <Text style={styles.input}>Order # : 3698524852</Text>
              <Text style={styles.input}>Driver : John</Text>
              <Text style={styles.input}>Location: </Text>
            </View>
            <View style={[styles.RectangleShapeView, styles.emptyspace]}>
              <Text style={styles.input}>Order 4</Text>
              <Text style={styles.input}>Order # : 3698524852</Text>
              <Text style={styles.input}>Driver : John</Text>
              <Text style={styles.input}>Location: </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.email}>
        <Text>Email: {auth.currentUser?.email}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  email: {
    alignItems: "center",
    marginVertical: "90%",
  },
  ordersbox: {
    flexDirection: "row",
    height: "10%",
    padding: 20,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  outline: {
    backgroundColor: "white",
    marginTop: 8,
    borderColor: "#0782F9",
    borderWidth: 2,
  },

  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-end",
    marginTop: "40%",
    textAlign: "right",
  },
  RectangleShapeView: {
    height: 120,
    // backgroundColor: "#FFC107",
    // position: "absolute",
    marginVertical: "10%",
    borderColor: "#000",
    borderWidth: 2,
    margin: "50%",
    width: "100%",
  },
  //emptyspace: { marginVertical: "25%" },
  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
});
export default HomeScreen;
