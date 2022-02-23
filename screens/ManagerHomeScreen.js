import { useNavigation } from "@react-navigation/core";
import React,{ useState, useReducer, useEffect } from "react";
import { Text,StyleSheet,Image,TouchableOpacity,SafeAreaView,ScrollView,StatusBar,Button } from "react-native";
import Order from "../components/Order";
import  {getAllOrders}  from "../services/orders.services";
import { auth } from "../firebase";
import DialogInput from "../components/DialogInput";
import { Header } from 'react-native-elements';

import { DrawerActions } from "@react-navigation/native";
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
  const [state, dispatch] = useReducer(reducer, {
    ordersLoaded: false,
    orders: [],
    count: 0,
  });
  const navigation = useNavigation();
  useEffect(async () => {
    
      console.log("ekht hashem  (.) (.)");
      const _orders = await getAllOrders("mia59@mail.aub.edu");
      let __orders = [];
      _orders.map((order) => {
        __orders.push(order.data());
      });
    
      dispatch({ type: "set-orders", orders: __orders });
    
  }, []);

 
  return (
    <>
       <Header containerStyle={{ backgroundColor: 'white', }}>                   
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Image source={require('../assets/drawer.jpg')} style={{ width: 50, height: 50, tintColor: 'black' }} />                    
        </TouchableOpacity>               
        </Header>

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
          <DialogInput/>
        <ScrollView>
          {state.ordersLoaded ? (
            state.orders.map((order) => (
              <Order key={order.phoneNumberCustomer} order={order} />
            ))
          ) : (
            <><Text>Hello</Text></>
          )}
        </ScrollView>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
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
