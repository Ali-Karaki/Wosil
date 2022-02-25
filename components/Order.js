import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Order = ({ order }) => {
  return (
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
      <Text style={styles.text}>
        {" "}
        Pick up Location : {order.pickupLocation}
      </Text>
      <Text style={styles.text}>
        {" "}
        Dropoff City : {order.dropoffLocation.city}
      </Text>
      <Text style={styles.text}>
        {" "}
        Dropoff Street: {order.dropoffLocation.street}
      </Text>
      <Text style={styles.text}>
        {" "}
        Dropoff Building : {order.dropoffLocation.building}
      </Text>
      <Text style={styles.text}>
        {" "}
        Dropoff Floor: {order.dropoffLocation.floor}
      </Text>
      <Text style={styles.text}>
        {" "}
        Customer phone number: {order.phoneNumberCustomer}{" "}
      </Text>
      <Text style={styles.text}> Price: {order.price} </Text>
      <Text style={styles.text}> DeliverCharge: {order.deliveryCharge} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "#000",
    marginLeft: "5%",
  },
});
export default Order;
