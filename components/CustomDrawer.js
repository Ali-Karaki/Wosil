import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { GiCarWheel } from "react-icons/gi";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import {
  getManagerbyMail,
  getAllManagers,
} from "../services/managers.services";

function Sidebar({ ...props }) {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
        // console.log("logged out");
      })
      .catch((error) => alert(error.message));
  };
  // console.log(auth.currentUser.email);
  // const manager = await getManagerbyMail(auth.currentUser.email);
  // console.log(manager);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/icon.png")}
          style={{ height: "100%", marginTop: -20 }}
        >
          <Text
            style={{
              marginLeft: -5,
              color: "#262626",
              fontSize: 18,
              marginTop: 200,
              marginBottom: -95,
              marginLeft: 5,
            }}
          >
            Hello
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <DrawerItem
            style={{
              marginTop: 10,
            }}
            label="Rate Us"
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
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
    </View>
  );
}

export default Sidebar;
