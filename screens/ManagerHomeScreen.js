import { useNavigation } from "@react-navigation/core";
import React, { useReducer, useEffect, useCallback } from "react";
import {
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
  ToastAndroid,
} from "react-native";
import Order from "../components/Order";
import { getAllOrders } from "../services/orders.services";
import { auth } from "../firebase";
import DialogInput from "../components/DialogInput";
import { Header } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

const reducer = (state, action) => {
  switch (action.type) {
    case "set-orders":
      return { ...state, orders: action.orders, ordersLoaded: true };
    case "show-past-orders":
      return { ...state, showCurrentOrders: false };
    case "show-current-orders":
      return { ...state, showCurrentOrders: true };
    default:
      return { ...state };
  }
};

const ManagerHomeScreen = () => {
  const managerEmail = auth.currentUser.email;
  const [state, dispatch] = useReducer(reducer, {
    ordersLoaded: false,
    orders: [],
    showCurrentOrders: true,
  });
  const navigation = useNavigation();
  useEffect(async () => {
    const _orders = await getAllOrders("kwe04@mail.aub.edu");
    let __orders = [];
    _orders.map((order) => {
      __orders.push(order.data());
    });

    dispatch({ type: "set-orders", orders: __orders });
  }, []);

  return (
    <>
      <Header containerStyle={{ backgroundColor: "#5E40BC80" }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            source={require("../assets/drawer.png")}
            style={{ width: 50, height: 50, tintColor: "black" }}
          />
        </TouchableOpacity>
        <Text
          style={{
            width: "110%",
            height: 45,
            position: "relative",
            left: "30%",
            // right:"30%",
            marginTop: "5%",
            justifyContent: "center",
            alignItems: "center",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: 30,
            fontSize: 30,
            color: "#FFD00E",
          }}
        >
          Orders
        </Text>
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 50,
            height: 50,
            right: "15%",
            //top: "5%",
            borderRadius: 50,
          }}
        />
      </Header>

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#5E40BC80",
          height: Dimensions.get("window").height,
        }}
      >
        <ScrollView>
          <View>
            <TouchableOpacity
              style={{
                width: "49.9%",
                height: 64,
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#4F379B",
              }}
              onPress={() => dispatch({ type: "show-past-orders" })}
            >
              <Text
                style={{ left: "15%", top: "5%", fontSize: 20, color: "white" }}
              >
                Past Orders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "49.9%",
                height: 64,
                left: "50.1%",
                //marginTop:"-15.5%",
                position: "absolute",
                backgroundColor: "#4F379B",
              }}
              onPress={() => dispatch({ type: "show-current-orders" })}
            >
              <Text
                style={{
                  left: "15%",
                  top: "25%",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Ongoing Orders{" "}
              </Text>
            </TouchableOpacity>

            <DialogInput />

            <ScrollView>
              <View style={{ marginTop: "10%", marginBottom: "90%" }}>
                {state.ordersLoaded ? (
                  state.showCurrentOrders ? (
                    state.orders
                      .filter((order) => order.completed == false)
                      .map((order) => (
                        <Order key={order.phoneNumberCustomer} order={order} />
                      ))
                  ) : (
                    state.orders
                      .filter((order) => order.completed == true)
                      .map((order) => (
                        <Order key={order.phoneNumberCustomer} order={order} />
                      ))
                  )
                ) : (
                  <></>
                )}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: "80%",
    flex: 1,
    marginLeft: "25%",
    justifyContent: "center",
    alignItems: "center",
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
});
export default ManagerHomeScreen;
