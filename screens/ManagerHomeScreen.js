import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";

import React from "react";
import {
  Pressable,
  TouchableOpacity,
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View>
        <SafeAreaView
          style={{
            flex: 1.5,
            backgroundColor: "black",
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={StyleSheet.MainContainer}>
              <View
                style={{
                  backgroundColor: "#e50000",
                  width: "100%",
                  height: 100,
                  borderColor: "#000",
                  borderWidth: 2,
                  borderRadius: 9,
                  justifyContent: "center",
                }}
              >
                <Text style={StyleSheet.text}> Order# </Text>
                <Text style={StyleSheet.text}> Driver: </Text>
                <Text style={StyleSheet.text}> Status: </Text>
                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text>
                          hgjkdgks
                          {/* <Text style={styles.modalText}>Order Details</Text>
                          <Text style={styles.text}>Driver Name</Text>
                          <Text style={styles.text}>Driver Phone Number</Text>
                          <Text style={styles.text}>Driver Location</Text>
                          <Text style={styles.text}>Status</Text>
                          <Text style={styles.text}>hi</Text> */}
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                          >
                            <Text style={styles.textStyle}>Hide Details</Text>
                          </Pressable>
                        </Text>
                      </View>
                    </View>
                  </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.textStyle}>Show Details</Text>
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#e50000",
                  width: "100%",
                  height: 100,
                  borderColor: "#000",
                  borderWidth: 2,
                  borderRadius: 9,
                  justifyContent: "center",
                }}
              >
                <Text style={StyleSheet.text}> Order# </Text>
                <Text style={StyleSheet.text}> Driver: </Text>
                <Text style={StyleSheet.text}> Status: </Text>

                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Order Details</Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text style={styles.textStyle}>Hide Details</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.textStyle}>Show Details</Text>
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#e50000",
                  width: "100%",
                  height: 100,
                  borderColor: "#000",
                  borderWidth: 2,
                  borderRadius: 9,
                  justifyContent: "center",
                }}
              >
                <Text style={StyleSheet.text}> Order# </Text>
                <Text style={StyleSheet.text}> Driver: </Text>
                <Text style={StyleSheet.text}> Status: </Text>
              </View>
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Order Details</Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Hide Details</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Show Details</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },

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
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "purple",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#Fff",
  },
  buttonClose: {
    backgroundColor: "#e50000",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ManagerHomeScreen;
