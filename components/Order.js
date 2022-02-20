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
      <Text style={styles.text}> Pickup Location: {order.location.pickup} </Text>
      <Text style={styles.text}>
        {" "}
        Dropoff Location: {order.location.dropoff}{" "}
      </Text>
      <Text style={styles.text}>
        {" "}
        Customer number: {order.phoneNumberCustomer}
      </Text>
      <Text style={styles.text}> Length: {order.dimensions.length} </Text>
      <Text style={styles.text}> Width: {order.dimensions.width} </Text>
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
