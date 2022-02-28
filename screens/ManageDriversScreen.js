import React,{useEffect,useReducer} from 'react'
import {Dimensions, Text,StyleSheet,TouchableOpacity,Image,View,SafeAreaView,ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/native";
import {getAllDriversOfManager} from "../services/drivers.services";
import DriverInfo from '../components/DriverInfo';

const reducer = (state, action) => {
  switch (action.type) {
    case "set-drivers":
      return { ...state, drivers: action.drivers, driversLoaded: true };
    
    default:
      return { ...state };
  }
};

function ManageDriversScreen() {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, {
   driversLoaded: false,
   drivers: [],
  });
  useEffect(async () => {
    const _drivers= await getAllDriversOfManager("mia59@mail.aub.edu");
    let __drivers= [];
    _drivers.map((driver) => {
      __drivers.push(driver.data());
    });
    console.log(__drivers);
    dispatch({ type: "set-drivers", drivers: __drivers });
}, []);
  return (
    <>
      <Header containerStyle={{ backgroundColor: '#5E40BC80'}}>                   
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
          <Image source={require('../assets/drawer.png')} style={{ width: 50, height: 50, tintColor: 'black' }} />    
        
          </TouchableOpacity>               
          <Text
                style={{
                  width: "110%",
                  height: 45,
                  position: "relative",
                  left: "30%",
                  marginTop:"5%",
                  justifyContent:"center",
                  alignItems:"center",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: 30,
                  fontSize: 30,
                  color: "#FFD00E",
                
                }}
              >
                Drivers
              </Text>
              <Image
                source={require("../assets/icon.png")}
                style={{
                  width: 50,
                  height: 50,
                  right: "15%",
                  //top: "5%",
                  borderRadius:50,
                }}
              />
          </Header>
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#5E40BC80",
      height: Dimensions.get('window').height
    }}
    >
      <ScrollView>
        <View > 
         
          <ScrollView >
          <View style = {{marginTop:"10%"}}>
            {state.driversLoaded ?
             
             state.drivers.map( (driver) => <DriverInfo key={driver.phoneNumber} driver={driver} /> ) : <></>}
             
          </View>
          
        </ScrollView>
         
         
          
        </View>
      </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ManageDriversScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 12, color: "#000",marginLeft:"5%",

  },
});