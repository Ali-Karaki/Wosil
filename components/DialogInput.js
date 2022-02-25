import React,{useState,useEffect} from 'react';
import TextInput from './TextInput';
import {TouchableOpacity,View,ScrollView,Button,BackHandler,ToastAndroid,StyleSheet} from 'react-native';
import {Dialog, DialogContent,DialogTitle,DialogButton} from "react-native-popup-dialog";
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
            <TouchableOpacity
              onPress={() => {
                setScaleAnimationDialog(true);
              }}
              style={{  borderWidth: 1.5,
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
                marginTop:"-160%",
                marginLeft:"30%",
                marginRight:"20%",
               
               }}
            >
              
              
                <Icon size={50} color="#C4C4C4" name="add" />
            
            </TouchableOpacity>

            <Dialog
             onTouchOutside={() => {
              setScaleAnimationDialog(false);
            }}
            style={{
              width :300,
              marginRight: -50,

            }}
            visible={scaleAnimationDialog}
            
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
                  setScaleAnimationDialog(false);
                }}
                key="button-1"
              />,
            ]}
            >
              <DialogContent style={{ height: 400 }}>
                <TouchableOpacity
                  onPress={() => {
                    setScaleAnimationDialog(false);
                  }}
                  style={{
                    alignSelf: "flex-end",
                    marginTop: 3,
                    left: 5,
                    top: 0,
                    marginBottom:10,
                    
                  }}
                  //icon ={ <FontAwesome5  name="window-close" size = {24} />}
                >
                  
                    <AntDesign name="closecircle" size={24} />
                  
                </TouchableOpacity>
                <ScrollView
                  style={{
                    width: 300,
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