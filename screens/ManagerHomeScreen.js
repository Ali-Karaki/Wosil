import { useNavigation } from "@react-navigation/core";
import React,{ useState ,useEffect,setState} from "react";
import { Alert, Modal, StyleSheet, Text, View,Pressable,
        TouchableOpacity,
        SafeAreaView,
        TouchableHighlight,
        ScrollView,
        StatusBar,
        Button,
      } from "react-native";

import TextInput from "../components/TextInput"
import {getAllOrders,createOrder} from "../services/orders.services.js";


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
import Order from "../components/Order";
import { AntDesign } from "@expo/vector-icons";



const ManagerHomeScreen =  () => {
  const [PickupLocation, setPickup] = useState({ value: '' })
  const [Dropoff, setDropoff] = useState({ value: '' })
  const [CustomerNum, setCustomerNum] = useState({ value: '' })
  const [Price,setPrice] =useState({ value: '' })
  const [Length,setLength] =useState({ value: '' })
  const [Width,setWidth] =useState({ value: '' })
  const [StartTime,setStartTime] =useState({ value: '' })
  const [EndTime,setEndTime] =useState({ value: '' })
  const [DeliveryCharge,setDeliveryCharge] =useState({ value: '' })
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  // const ordersComponents = useEffect(() => {
  //   const orders = getAllOrders();
  //   let newState = orders.map(order => {<Order key={order.id} order={order}/>});
  //     return {newState}
  // }, []);
 
  return (
    <>
     
      <SafeAreaView
        style={{
          flex: 1.5,
          backgroundColor:"white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
     
        <ScrollView >
          <View style={styles.MainContainer}>
            {/* For Scale Animation Dialog */}
        
           
            <TouchableOpacity onPress={() => {setScaleAnimationDialog(true)}}>
                  <View style={{
                      backgroundColor: 'purple',
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderRadius: 60,
                      paddingTop:30,
                      paddingBottom:30,
                      marginLeft:40,
                      paddingLeft:5,
                      paddingRight:5,
                      marginRight: -150,
                      marginBottom:30,
                      marginTop:80,

                    }}
                  >
                    <Text style={{ color: 'white'}}>Click Here to Create a New Order</Text>
                  </View>
                </TouchableOpacity>
                
                
            <Dialog
            style = {{
              width : "80%",
              height : "40%"
            }}
             
              visible={scaleAnimationDialog}

            >
         
              <DialogContent >
              <TouchableOpacity
                  onPress={() => { setScaleAnimationDialog(false)}}
                  //icon ={ <FontAwesome5  name="window-close" size = {24} />}
                >
                    <View 
                        style = {{
                          alignSelf: 'flex-end',
                          marginTop: 3,
                          left: 5,
                          top: 5, 
                          marginBottom:5,
                        }}
                      >
                        <AntDesign
                          name = "closecircle"
                          size = {24}
                          />
                    </View>
                  </TouchableOpacity> 
                <ScrollView
                      style={{
                        
                        width:250,
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
                      createOrder(Width,Length,PickupLocation,Dropoff,Price,DeliveryCharge) 
                     
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
                  marginLeft:"90%",
                  height: "60%",
                }}
              >
                 <Text style={{ fontSize: 20,color: "white",marginLeft:90}}> Example : </Text>
                <Text style={styles.text}> Pickup Location: Moussetibeh </Text>
                <Text style={styles.text}> Dropoff Location:Bliss  </Text>
                <Text style={styles.text}> Customer number: 71590832 </Text>
                <Text style={styles.text}> Length (in cm): 50 </Text>
                <Text style={styles.text}> Width(in cm):40  </Text>
                <Text style={styles.text}> Price: 50,000 LBP </Text>
                <Text style={styles.text}> DeliverCharge: 10,000 LBP </Text>

              </View>
          </View>

          <TouchableHighlight>
            <View style={styles.MainContainer}>
                    
                    {/* {ordersComponents} */}
            </View>
          </TouchableHighlight>
          
          <View style={{
            marginTop:"20%",
            fontWeight:900,
            borderRadius: 50,
            marginRight: "35%",
          }}>
            <Text style={styles.currentorder}>Current Orders :</Text>
          </View> 

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
    width : "50%",
    
  },
  appButtonContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    marginLeft:"70%",
    marginBottom:30,
   
  },
  currentorder:{
    fontSize: 30,
    fontFamily:"Roboto",
    
    
    
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
});
export default ManagerHomeScreen;
