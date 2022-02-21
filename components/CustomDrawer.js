import React from "react";

import {View,Text,ImageBackground,TouchableOpacity,} from "react-native";
import {DrawerContentScrollView,DrawerItem,DrawerItemList,} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import {GiCarWheel} from "react-icons/gi";

function Sidebar({ ...props }) {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
        
      })
      .catch((error) => alert(error.message));
  };


  return (
    
    <View style={{ flex: 1 }}>
    
        <ImageBackground
          source={require("../assets/icon.jpg")}
          style={{ height: 250 }}
        >
          

        </ImageBackground>
        <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        <View style={{ flex: 1, marginTop:-20,backgroundColor: "#fff",marginLeft:5}}>
          <DrawerItemList {...props} />
          <DrawerItem
            style={{
              marginTop: 40,
            }}
            options = {{
              drawerIcon: ({color}) => (<GiCarWheel name="GiCarWheel" size={22} color = {color} />)
            }}
            label="Drivers"
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
      
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" ,marginTop:330}}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15,marginBottom:-20 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>

        </TouchableOpacity>
        
      </View>
      </DrawerContentScrollView>
    </View>
    
  );
}

export default Sidebar;
