import { useNavigation } from "@react-navigation/core";
import { useState, useReducer, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import TextInput from "../components/TextInput";
import Order from "../components/Order";
import { createOrder, getAllOrders } from "../services/orders.services";
import {
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from "react-native";
import { auth } from "../firebase";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";

import AlertBox from "react-native-easy-alert";

import { Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "set-orders":
      return { ...state, orders: action.orders, ordersLoaded: true };
    case "increase-count":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
};

const ManagerHomeScreen = () => {
  const managerEmail = auth.currentUser.email;
  console.log(managerEmail);
  const [state, dispatch] = useReducer(reducer, {
    ordersLoaded: false,
    orders: [],
    count: 0,
  });
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
  const [DeliveryCharge, setDeliveryCharge] = useState({
    value: "",
    error: "",
  });
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);

  useEffect(async () => {
    const _orders = await getAllOrders("moe@gmail.com");
    let __orders = [];
    _orders.map((order) => {
      __orders.push(order.data());
    });
    console.log(__orders);
    dispatch({ type: "set-orders", orders: __orders });
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          // paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={() => {
                setScaleAnimationDialog(true);
              }}
            >
              <View
                style={{
                  backgroundColor: "purple",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 30,
                  marginLeft: 30,
                  marginTop: 30,
                  borderRadius: 9,
                  borderWidth: 2,
                  borderColor: "black",
                  // height: "50%",
                  width: "100%",
                }}
              >
                <Text style={{ color: "white" }}>
                  Click Here to Create a New Order
                </Text>
              </View>
            </TouchableOpacity>

            <Dialog
              style={{
                width: "80%",
                // height: "200px",
              }}
              visible={scaleAnimationDialog}
            >
              <DialogContent style={{ height: "90%" }}>
                <TouchableOpacity
                  onPress={() => {
                    setScaleAnimationDialog(false);
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
                    }}
                  >
                    <AntDesign name="closecircle" size={24} />
                  </View>
                </TouchableOpacity>
                <ScrollView
                  style={{
                    width: 250,
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
                        DeliveryCharge,
                        24543534,
                        "moe@gmail.com"
                      ) && setScaleAnimationDialog(false);
                    }}
                    key="button-1"
                  />
                </ScrollView>
              </DialogContent>
            </Dialog>
            <View
              style={{
                backgroundColor: "purple",
                width: 300,
                borderColor: "#000",
                borderWidth: 10,
                borderRadius: 9,
                justifyContent: "center",
                marginLeft: "90%",
                // height: "220px",
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", marginLeft: 90 }}
              ></Text>
              <Text style={styles.text}> Pickup Location: Moussetibeh </Text>
              <Text style={styles.text}> Dropoff Location:Bliss </Text>
              <Text style={styles.text}> Customer number: 71590832 </Text>
              <Text style={styles.text}> Length (in cm): 50 </Text>
              <Text style={styles.text}> Width(in cm):40 </Text>
              <Text style={styles.text}> Price: 50,000 LBP </Text>
              <Text style={styles.text}> Delivery Charge: 10,000 LBP </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: "20%",
              fontWeight: 900,

              marginRight: "35%",
            }}
          >
            <Text style={styles.currentorder}>Current Orders :</Text>
          </View>

          {state.ordersLoaded ? (
            state.orders.map((order) => (
              <Order key={order.phoneNumberCustomer} order={order} />
            ))
          ) : (
            <></>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "Roboto",
  },
  text1: {
    fontSize: 10,
    color: "white",
  },
  text: {
    fontSize: 18,
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
});
export default ManagerHomeScreen;
