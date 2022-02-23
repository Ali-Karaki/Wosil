import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import TextInput from "../components/TextInput";

import {
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";
import AlertBox from "react-native-easy-alert";

import { Icon } from "react-native-elements";
import { Button, BackHandler, ToastAndroid } from "react-native";
import { IconButton } from "react-native-paper";

const ManagerHomeScreen = () => {
  const navigation = useNavigation();
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [
    scaleAnimationDialogOrderDetails,
    setScaleAnimationDialogOrderDetails,
  ] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  const [PickupLocation, setPickup] = useState("");
  const [Dropoff, setDropoff] = useState("");
  const [CustomerNum, setCustomerNum] = useState("");
  const [Price, setPrice] = useState("");
  const [Length, setLength] = useState("");
  const [Width, setWidth] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [DeliveryCharge, setDeliveryCharge] = useState("");
  const [scaleAnimationDialogCreateOrder, setScaleAnimationDialogCreateOrder] =
    useState(false);

  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => null;
  }, []);
  const handleBackButton = () => {
    ToastAndroid.show("Cannot go back", ToastAndroid.SHORT);
    return true;
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#5E40BC80",
          //paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView style={{ backgroundColor: "#5E40BC80" }}>
          <View
            style={{
              width: "49.9%",
              height: 64,
              left: 0,
              top: 0,
              position: "absolute",
              backgroundColor: "#4F379B",
            }}
          >
            <Text
              style={{ left: "15%", top: "25%", fontSize: 20, color: "white" }}
            >
              Past Orders
            </Text>
          </View>
          <View
            style={{
              width: "49.9%",
              height: 64,
              left: "50.1%",
              top: 0,
              position: "absolute",
              backgroundColor: "#4F379B",
            }}
          >
            <Text
              style={{ left: "15%", top: "25%", fontSize: 20, color: "white" }}
            >
              Ongoing Orders{" "}
            </Text>
          </View>
          <View style={styles.MainContainer}>
            {/* For Scale Animation Dialog */}
            <Image
              source={require("../assets/icon.png")}
              style={{
                width: 60,
                height: 63.05,
                right: 45,
                top: "35%",
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                width: 342,
                height: 45,
                position: "relative",
                left: 200,
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: 30,
                fontSize: 30,
                color: "#FFD00E",
              }}
            >
              Ongoing Orders
            </Text>

            <TouchableOpacity
              onPress={() => {
                setScaleAnimationDialogCreateOrder(true);
              }}
              style={{ left: "50%" }}
            >
              <View
                style={{
                  borderWidth: 1.5,
                  borderRadius: 40,
                  borderColor: "#5E40BC80",
                  shadowColor: "#5E40BC80",
                  backgroundColor: "#4F379B",
                  shadowOffset: {
                    width: 40,
                    height: 40,
                  },
                  shadowOpacity: 0.6,
                  elevation: 0.6,
                  top: "25%",
                  //left: "50%",
                }}
              >
                <Icon size={50} color="#C4C4C4" name="add" />
              </View>
            </TouchableOpacity>

            <Dialog visible={scaleAnimationDialogCreateOrder}>
              <DialogContent style={{ height: "90%" }}>
                <TouchableOpacity
                  onPress={() => {
                    setScaleAnimationDialogCreateOrder(false);
                  }}
                  //icon ={ <FontAwesome5  name="window-close" size = {24} />}
                >
                  <View
                    style={{
                      alignSelf: "flex-end",
                      marginTop: 3,
                      left: 5,
                      top: 5,
                      marginBottom: 5,
                      marginVertical: 10,
                    }}
                  >
                    <AntDesign
                      name="closecircle"
                      style={styles.closebutton}
                      size={30}
                    />
                  </View>
                </TouchableOpacity>
                <ScrollView
                  style={{
                    width: 200,
                  }}
                >
                  <TextInput
                    label="Pick Up Location"
                    value={PickupLocation.value}
                    returnKeyType="next"
                    onChangeText={(text) => setPickup({ value: text })}
                  />
                  <TextInput
                    label="Drop off Location"
                    value={Dropoff.value}
                    returnKeyType="next"
                    onChangeText={(text) => setDropoff({ value: text })}
                  />
                  <TextInput
                    label="Customer Number"
                    value={CustomerNum.value}
                    returnKeyType="next"
                    onChangeText={(text) => setCustomerNum({ value: text })}
                  />
                  <TextInput
                    label="Length"
                    value={Length.value}
                    returnKeyType="next"
                    onChangeText={(text) => setLength({ value: text })}
                  />
                  <TextInput
                    label="Width"
                    value={Width.value}
                    returnKeyType="next"
                    onChangeText={(text) => setWidth({ value: text })}
                  />
                  <TextInput
                    label="Price"
                    value={Price.value}
                    returnKeyType="next"
                    onChangeText={(text) => setPrice({ value: text })}
                  />
                  <TextInput
                    label="Delivery Charge"
                    value={DeliveryCharge.value}
                    returnKeyType="next"
                    onChangeText={(text) => setDeliveryCharge({ value: text })}
                  />

                  <Button
                    title="Create"
                    onPress={() => {
                      createOrder(
                        Width,
                        Length,
                        PickupLocation,
                        Dropoff,
                        Price,
                        DeliveryCharge
                      );
                    }}
                    key="button-1"
                  />
                </ScrollView>
              </DialogContent>
            </Dialog>
            {/* <View
              style={{
                backgroundColor: "purple",
                width: 300,
                borderColor: "#000",
                borderWidth: 10,
                borderRadius: 9,
                justifyContent: "center",
                marginLeft: "90%",
                height: "60%",
              }}
            >
              <Text style={{ fontSize: 20, color: "white", marginLeft: 90 }}>
                {" "}
                Example :{" "}
              </Text>
              <Text style={styles.text}> Pickup Location: Moussetibeh </Text>
              <Text style={styles.text}> Dropoff Location:Bliss </Text>
              <Text style={styles.text}> Customer number: 71590832 </Text>
              <Text style={styles.text}> Length (in cm): 50 </Text>
              <Text style={styles.text}> Width(in cm):40 </Text>
              <Text style={styles.text}> Price: 50,000 LBP </Text>
              <Text style={styles.text}> DeliverCharge: 10,000 LBP </Text>
            </View> */}
          </View>
          <View>
            <View style={styles.MainContainer}>
              {/* For Scale Animation Dialog */}
              <Dialog
                onTouchOutside={() => {
                  setScaleAnimationDialogOrderDetails(false);
                }}
                width={0.9}
                visible={scaleAnimationDialogOrderDetails}
                dialogAnimation={new ScaleAnimation()}
                onHardwareBackPress={() => {
                  setScaleAnimationDialogOrderDetails(false);
                  return true;
                }}
                dialogTitle={
                  <DialogTitle title="Order Details" hasTitleBar={false} />
                }
                actions={[
                  <DialogButton
                    text="DISMISS"
                    onPress={() => {
                      setScaleAnimationDialogOrderDetails(false);
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
                        setScaleAnimationDialogOrderDetails(false);
                      }}
                      key="button-1"
                    />
                  </View>
                </DialogContent>
              </Dialog>
            </View>

            <TouchableHighlight
              // style={styles.justifyContent}
              onPress={() => setScaleAnimationDialogOrderDetails(true)}
            >
              <View style={StyleSheet.MainContainer}>
                <View
                  style={{
                    backgroundColor: "#C4C4C4",
                    position: "relative",
                    width: 357,
                    height: 132,
                    left: 30,
                    borderColor: "#5E40BC",

                    borderWidth: 1.5,
                    borderRadius: 30,
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 40,
                      height: 40,
                    },
                    opacity: 0.95,
                    elevation: 2,

                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#000" }}> Order# </Text>
                  <Text style={{ fontSize: 20, color: "#000" }}> Driver: </Text>
                  <Text style={{ fontSize: 20, color: "#000" }}> Status: </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
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
    backgroundColor: "#5E40BC80",
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
  MainContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  appButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    marginLeft: "70%",
    marginBottom: 30,
  },
  currentorder: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
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
  closebutton: {},
});
export default ManagerHomeScreen;
