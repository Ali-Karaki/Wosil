import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { removeDriver } from "../services/drivers.services";

const DriverInfo = ({ driver }) => {
  return (
    <View
      style={{
        marginTop: "3%",
        backgroundColor: "#C4C4C4",
        position: "relative",
        width: "85%",
        //height: "100%",
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
      <Text style={styles.text}> Name : {driver.name}</Text>
      <Text style={styles.text}> Email : {driver.mail}</Text>
      <Text style={styles.text}> Phone Number: {driver.phoneNumber}</Text>
      <Text style={styles.text}> Vehicle Type: {driver.vehicle}</Text>
      <Text style={styles.text}>
        {" "}
        City of Operation: {driver.location.city}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 10,
          marginLeft: "30%",
          paddingTop: 15,
          paddingBottom: 15,

          marginRight: 30,
          backgroundColor: "#5E40BC80",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#fff",
          width: "40%",
        }}
        onPress={() => {
          removeDriver(driver.mail, "mia59@mail.aub.edu");
        }}
      >
        <Text style={{ marginLeft: "30%" }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "#000",
    marginLeft: "5%",
  },
});
