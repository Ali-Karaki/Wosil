import React,{useState,useEffect} from 'react';
import TextInput from './TextInput';
import {TouchableOpacity,View,ScrollView,Button} from 'react-native';
import {Dialog, DialogContent} from "react-native-popup-dialog";
import  {createOrder} from '../services/orders.services';
import { AntDesign } from "@expo/vector-icons";
import { auth } from '../firebase';
import { Icon } from "react-native-elements";

function DialogInput() {
    const [Building, setBuilding] = useState("");
    const [City, setCity] = useState("");
    const [Street, setStreet] = useState("");
    const [Floor,setFloor] = useState("");
    const [PickupLocation,setPickupLocation] = useState("");
    const [CustomerNum, setCustomerNum] = useState("");
    const [Price, setPrice] = useState("");
    const [DeliveryCharge, setDeliveryCharge] = useState("");
    const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
    const managerEmail = auth.currentUser.email;
  
   
  return (
    
   <>
      
            <TouchableOpacity
              onPress={() => {
                setScaleAnimationDialog(true);
              }}
          
            >
              
              <View  style={{  
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
                marginTop:"5%",
                marginLeft:"42%",
                marginRight:"40%",
               
               
               }}
               >
                <Icon size={50} color="#C4C4C4" name="add" />
                </View>
            </TouchableOpacity>
          
            <Dialog
            visible={scaleAnimationDialog}
              
            >
            
              <DialogContent  >
                <TouchableOpacity
                
                  onPress={() => 
                   
                    setScaleAnimationDialog(false)
                  }
                
                >
                  <View  style={{
                    alignSelf: "flex-end",
                    marginTop: 3,
                    left: 5,
                    top: 0,
                    marginBottom:5,
                    
                  }}>
                    <AntDesign name="closecircle" size={24} />
                    </View>
                </TouchableOpacity>
                <ScrollView
                  style={{
                   
                   width:250,
                  }}
                >
                 
                  <TextInput
                    label="Pick up Location"
                    value={PickupLocation.value}
                    returnKeyType="next"
                    onChangeText={(text) => setPickupLocation(text)}
                  />
                  <TextInput
                    label="City"
                    value={City.value}
                    returnKeyType="next"
                    onChangeText={(text) => setCity(text)}
                  />
                   <TextInput
                    label="Building"
                    value={Building.value}
                    returnKeyType="next"
                    onChangeText={(text) => setBuilding(text)}
                  />
                   <TextInput
                    label="Floor"
                    value={Floor.value}
                    returnKeyType="next"
                    onChangeText={(text) => setFloor(text)}
                  />
                  <TextInput
                    label="Street"
                    value={Street.value}
                    returnKeyType="next"
                    onChangeText={(text) => setStreet(text)}
                  />
                  <TextInput
                    label="Customer Number"
                    value={CustomerNum.value}
                    returnKeyType="next"
                    onChangeText={(text) => setCustomerNum(text.toString())}
                  />
               
                  <TextInput
                    label="Price"
                    value={Price.value}
                    returnKeyType="next"
                    onChangeText={(text) => setPrice(parseInt(text))}
                  />
                  <TextInput
                    label="Delivery Charge"
                    value={DeliveryCharge.value}
                    returnKeyType="next"
                    onChangeText={(text) => setDeliveryCharge(parseInt(text))}
                  />

                  <Button
                    title="Create"
                    onPress={() => {
                      console.log(  CustomerNum)
                      createOrder(
                        City,
                        PickupLocation,
                        Price,
                        DeliveryCharge,
                        CustomerNum,
                        "kwe04@mail.aub.edu",
                        Street,
                        Building,
                        Floor,
                      ) && setScaleAnimationDialog(false) &&
                     document.location.reload();
                    }}
                    key="button-1"
                  />
                </ScrollView>
              </DialogContent>
            
            </Dialog>
             
       
    </> 
  )
}

export default DialogInput