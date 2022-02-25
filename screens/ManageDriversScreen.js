import { useNavigation } from "@react-navigation/core";
import React, { useReducer, useEffect, useCallback } from "react";
import {
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
  ToastAndroid,
} from "react-native";
import Order from "../components/Order";
import { getAllOrders } from "../services/orders.services";
import { auth } from "../firebase";
import DialogInput from "../components/DialogInput";
import { Header } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";
function ManageDriversScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Header containerStyle={{ backgroundColor: "#5E40BC80" }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            source={require("../assets/drawer.png")}
            style={{ width: 50, height: 50, tintColor: "black" }}
          />
        </TouchableOpacity>
        <Text
          style={{
            width: "110%",
            height: 45,
            position: "relative",
            left: "15%",
            // right:"30%",
            marginTop: "5%",
            justifyContent: "center",
            alignItems: "center",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: 30,
            fontSize: 30,
            color: "#FFD00E",
          }}
        >
          Drivers Page
        </Text>
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 50,
            height: 50,
            right: "15%",
            //top: "5%",
            borderRadius: 50,
          }}
        />
      </Header>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#5E40BC80",
        }}
      >
        <ScrollView>
          <View>
            <View
              style={{
                backgroundColor: "#C4C4C4",
                position: "relative",
                width: "85%",
                height: "100%",
                left: 30,
                borderColor: "#5E40BC",
                //marginTop:"-40%",
                borderWidth: 1.5,
                borderRadius: 30,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 40,
                  height: 40,
                },
                opacity: 0.7,
                elevation: 2,

                justifyContent: "center",
              }}
            >
              <Text style={styles.text}>Name:</Text>
              <Text style={styles.text}>Vehicle:</Text>
              <Text style={styles.text}>Phone Number:</Text>
              <Text style={styles.text}>City:</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "#000",
    marginLeft: "5%",
  },
});

export default ManageDriversScreen;
