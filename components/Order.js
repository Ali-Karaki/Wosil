import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
const Order = ({ order }) => {
  return (
    <View
      style={{
        backgroundColor: "purple",
        borderColor: "purple",
        borderWidth: 10,
        borderRadius: 9,
        justifyContent: "center",
        marginLeft: "10%",
        height: 200,
        width: 300,
        marginTop: 100,
      }}
    >
      <Text style={styles.text}> Pick up Location : {order.pickupLocation}</Text>
      <Text style={styles.text}> Dropoff Building : {order.dropoffLocation.building}</Text>
      <Text style={styles.text}> Dropoff City : {order.dropoffLocation.city}</Text>
      <Text style={styles.text}> Dropoff Floor: {order.dropoffLocation.floor}</Text>
      <Text style={styles.text}> Dropoff Street: {order.dropoffLocation.street}</Text>
      <Text style={styles.text}> Customer phone number: {order.phoneNumberCustomer} </Text>
  
      <Text style={styles.text}> Price: {order.price} </Text>
      <Text style={styles.text}> DeliverCharge: {order.deliveryCharge} </Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
