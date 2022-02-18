import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from "react-native";
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
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const navigation = useNavigation();
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1.5,
          backgroundColor: "white",
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
                // console.log("onHardwareBackPress");
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
          <Button title="Sign Out" onPress={handleSignOut}></Button>
        </ScrollView>
      </SafeAreaView>
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
