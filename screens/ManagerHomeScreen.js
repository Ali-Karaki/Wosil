<<<<<<< HEAD
import React from "react";
=======
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

>>>>>>> master
import {
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from "react-native";
<<<<<<< HEAD


const ManagerHomeScreen = () => {
  return (
    <>  
     
      <View>
        <SafeAreaView style={styles.container2}>
          <ScrollView style={styles.scrollView}>
            <Text style = {styles.buttonText}> Never Gonna Give you up, Never gonna let you down </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
=======
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";

import { auth } from "../firebase";
import AlertBox from "react-native-easy-alert";

import { Button } from "react-native";

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
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1.5,
          backgroundColor: "black",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
          <View style={styles.MainContainer}>
            {/* For Scale Animation Dialog */}
            <Dialog
              onTouchOutside={() => {
                setScaleAnimationDialog(false);
              }}
              width={0.9}
              visible={scaleAnimationDialog}
              dialogAnimation={new ScaleAnimation()}
              onHardwareBackPress={() => {
                setScaleAnimationDialog(false);
                console.log("onHardwareBackPress");
                return true;
              }}
              dialogTitle={
                <DialogTitle title="Order Details" hasTitleBar={false} />
              }
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    setScaleAnimationDialog(false);
                  }}
                  key="button-1"
                />,
              ]}
            >
              <DialogContent>
                <View>
                  <Text style={styles.modalText}>Driver Name</Text>
                  <Text style={styles.modalText}>Driver Phone Number</Text>
                  <Text style={styles.modalText}>Driver Location</Text>
                  <Text style={styles.modalText}>Status</Text>
                  <Button
                    title="Close"
                    onPress={() => {
                      setScaleAnimationDialog(false);
                    }}
                    key="button-1"
                  />
                </View>
              </DialogContent>
            </Dialog>
          </View>

          <TouchableHighlight
            // style={styles.justifyContent}
            onPress={() => setScaleAnimationDialog(true)}
          >
            <View style={StyleSheet.MainContainer}>
              <View
                style={{
                  backgroundColor: "#ff0000",
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
            </View>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
>>>>>>> master
    </>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
  MainContainer: {
>>>>>>> master
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
