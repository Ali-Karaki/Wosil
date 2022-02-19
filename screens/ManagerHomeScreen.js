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
          backgroundColor: "#f1f1f1",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
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
            <View style={styles.MainContainer}>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: "75%",

                  //marginLeft: "13%",

                  height: 100,
                  borderColor: "#efefef",
                  shadowColor: "black",
                  shadowOpacity: 0.26,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 10,
                  elevation: 3,
                  borderWidth: 1,
                  borderRadius: 9,
                  padding: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text}> Order#: </Text>
                <Text style={styles.text}> Driver: </Text>
                <Text style={styles.text}> Status: </Text>
              </View>
            </View>
          </TouchableHighlight>
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
    backgroundColor: "#f1f1f1",
  },

  text: {
    fontSize: 22,
    color: "black",
    textAlign: "left",
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
