import React from 'react';
import { StyleSheet } from 'react-native-web';
const Order = ({ order }) => {
    return (
        <>
            
            <Text style={styles.text}> Pickup Location: {order.location.city} </Text>
            <Text style={styles.text}> Dropoff Location: {order.location.street}  </Text>
            <Text style={styles.text}> Customer number: 71371576 </Text>
            <Text style={styles.text}> Length: {order.dimensions.length} </Text>
            <Text style={styles.text}> Width: {order.dimesions.width} </Text>
            <Text style={styles.text}> Price: {order.price} </Text>
            <Text style={styles.text}> DeliverCharge: {order.deliveryCharge} </Text>
            <Text style={styles.text}> EndTime: {order.endTime} </Text>
        </>
    );
};

export default Order;

/**
 *         <View
                style={{
                  backgroundColor: "red",
                  width: 300,
                  borderColor: "#000",
                  borderWidth: 10,
                  borderRadius: 9,
                  justifyContent: "center",
                  marginLeft:50,
                  height: 250,
                }}
              >
 */

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
    
      } 
});
