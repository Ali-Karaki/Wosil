import { useNavigation } from "@react-navigation/core";
import React,{ useState, useReducer, useEffect } from "react";
import { StyleSheet, Text, View,RefreshControl,TouchableOpacity,SafeAreaView,ScrollView,StatusBar,Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Order from "../components/Order";
import { createOrder, getAllOrders } from "../services/orders.services";
import { auth } from "../firebase";
import {Dialog, DialogContent,} from "react-native-popup-dialog";
import DialogInput from "../components/DialogInput";


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
    const _orders = await getAllOrders(managerEmail);
    let __orders = [];
    _orders.map((order) => {
      __orders.push(order.data());
    });
    console.log(__orders);
    dispatch({ type: "set-orders", orders: __orders });
  }, []);

  const [color, changeColor] = useState("red");
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      changeColor(color);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <>
     
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
       
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View >
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
                  marginLeft: "100%",
                  borderRadius: 9,
                  borderWidth: 2,
                  borderColor: "purple",
                  height: "50%",
                  width: "100%",
                }}
              >
                <Text style={{ color: "white" }}>Create New Order</Text>
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
                  <DialogInput/>
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
                        managerEmail
                      ) &&
                        setScaleAnimationDialog(false) &&
                        getAllOrders(managerEmail);
                        document.location.reload()
                   }}
                    key="button-1"
                  />
                </ScrollView>
              </DialogContent>
            
            </Dialog>
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
