import React,{useState} from 'react';
import TextInput from './TextInput';
import {TouchableOpacity,View,ScrollView,Button,Text} from 'react-native';
import {Dialog, DialogContent,} from "react-native-popup-dialog";
import  {createOrder} from '../services/orders.services';
import { AntDesign } from "@expo/vector-icons";
import { auth } from '../firebase';
function DialogInput() {
    const [Dropoff, setDropoff] = useState("");
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
              <View
                style={{
                  backgroundColor: "purple",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 30,
                  marginLeft: 90,
                  marginTop: 30,
                  flexDirection: 'row',
                  borderRadius: 9,
                  borderWidth: 2,
                  borderColor: "black",
                  //height: "50%",
                  width: "100%",
  
                  flexWrap:'wrap'
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
              <DialogContent style={{ height: 500 }}>
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
                      createOrder(
                        PickupLocation,
                        Building,
                        City,
                        Floor,
                        Street,
                        Dropoff,
                        Price,
                        DeliveryCharge,
                        CustomerNum,
                        "mia59@mail.aub.edu"
                      ) && setScaleAnimationDialog(false) &&
                      window.location.reload();
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