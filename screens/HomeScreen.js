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
      <View>
        <SafeAreaView style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <View style = {styles.welcome}><Text style = {styles.welcText}>Welcome {auth.currentUser?.email} to Manager Homepage</Text></View>
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
      
    </>
  );
};

const styles = StyleSheet.create({
  welcText:{
    fontSize:25,
    fontStyle: 'italic',
  },
  welcome:{
    backgroundColor:"purple",
    marginTop:"2%",
  },
  buttonText: {
    backgroundColor:"purple",
  },  
  ordersbox: {
    flexDirection: "row",
    height: "10%",
    padding: 20,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor : "#800080",
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
    backgroundColor:"black",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "purple",
  },
});
export default HomeScreen;
