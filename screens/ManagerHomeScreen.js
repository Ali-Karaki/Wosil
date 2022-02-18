import { useNavigation } from "@react-navigation/core";
import React,{ useState } from "react";
import { Alert, Modal, StyleSheet, Text, View,Pressable,
        TouchableOpacity,
        SafeAreaView,
        TouchableHighlight,
        ScrollView,
        StatusBar,
        Button,
      } from "react-native";

import TextInput from "../components/TextInput"



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



const ManagerHomeScreen = () => {
  const [PickupLocation, setPickup] = useState({ value: '' })
  const [Dropoff, setDropoff] = useState({ value: '' })
  const [CustomerNum, setCustomerNum] = useState({ value: '' })
  const [Price,setPrice] =useState({ value: '' })
  const [Length,setLength] =useState({ value: '' })
  const [Width,setWidth] =useState({ value: '' })
  const [StartTime,setStartTime] =useState({ value: '' })
  const [EndTime,setEndTime] =useState({ value: '' })
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);

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
        
           
                <Button 
                  title="Create New Order"
                  onPress={() => setScaleAnimationDialog(true)} 
                  style = {styles.appButtonContainer}
                  />
             
            
            <Dialog
              width= "50%"
              visible={scaleAnimationDialog}
            >
         
              <DialogContent>
                <ScrollView>
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
                    label="StartTime"
                    value={StartTime.value}
                    returnKeyType="next"
                    onChangeText={(text) => setStartTime({ value: text })}
                   
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
                    label="End Time"
                    value={EndTime.value}
                    returnKeyType="next"
                    onChangeText={(text) => setEndTime({ value: text })}
                   
                  />
                 
                  <Button
                    title="Close"
                    onPress={() => {
                      setScaleAnimationDialog(false);
                    }}
                    key="button-1"
                  />
                </ScrollView>
              </DialogContent>
            
            </Dialog>
            
          </View>

          <TouchableHighlight
            // style={styles.justifyContent}
            onPress={() => setScaleAnimationDialog(true)}
          >
            <View style={StyleSheet.MainContainer}>
              <View
                style={{
                  backgroundColor: "#eee256",
                  width: 300,
                  borderColor: "#000",
                  borderWidth: 10,
                  borderRadius: 9,
                  justifyContent: "center",
                  marginLeft:35,
                  height: 250,
                }}
              >
                <Text style={StyleSheet.text}> Example:  </Text>
                <Text style={StyleSheet.text}> PickupLocation: Mousseitbeh  </Text>
                <Text style={StyleSheet.text}> Dropoff: Bliss </Text>
                <Text style={StyleSheet.text}> CustomerNum: 71488763 </Text>
                <Text style={StyleSheet.text}> StartTime: 12 pm </Text>
                <Text style={StyleSheet.text}> Length : 40cm</Text>
                <Text style={StyleSheet.text}> Width: 50cm </Text>
                <Text style={StyleSheet.text}> Price: 40,000 LBP </Text>
                <Text style={StyleSheet.text}> Driver: Khaled  Jizi </Text>
                <Text style={StyleSheet.text}> EndTime: TBA </Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={{
            marginTop:"20%",
            borderWidth: 10,
            borderColor: "black",
            backgroundColor: "#eee256",
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

   
  },
  currentorder:{
    fontSize: 30,
    fontFamily:"Roboto",
    
    
    
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",

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
