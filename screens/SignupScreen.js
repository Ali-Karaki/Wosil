import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { phoneNumberValidator } from "../helpers/phoneNumberValidator";
import { theme } from "../core/theme";
import { SafeAreaView } from "react-native";
import { ScrollView, Picker } from "react-native";
import {
  getAllDrivers,
  addManager,
  isAvailableMail,
  isAvailablePhone,
} from "../services/managers.services";
import { addDriver } from "../services/drivers.services";
import firebase from "firebase";
import { app } from "../firebase.js";
import { auth } from "../firebase";

export default function SignupScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [businessOwnerToken, setBusinessOwnerToken] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [companyName, setComName] = useState({ value: "", error: "" });
  const [phoneNumber, setPhoneNbr] = useState({ value: "", error: "" });
  const [role, setRole] = useState("businessOwner");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Root");
      }
    });

    return unsubscribe;
  }, []);

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const phoneNumberError = phoneNumberValidator(phoneNumber.value);
    if (nameError || emailError || passwordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhoneNbr({ ...phoneNumber, error: phoneNumberError });
      return;
    } else {
      // handleSignUp();
      if (role === "businessOwner") {
        // addManager(name.value, email.value, companyName.value, phoneNumber.value);
      } else {
        // addDriver(
        //   name.value,
        //   email.value,
        //   businessOwnerToken.value,
        //   companyName.value,
        //   phoneNumber.value
        // );
      }
    }
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        // console.log("Registered with:", user);
      })
      .catch((error) => alert(error.message));
  };

  if (role === "businessOwner") {
    return (
      <SafeAreaView
        style={{
          flex: 1.5,
          backgroundColor: "white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
          <Background>
            {/* <BackButton goBack={navigation.goBack} /> */}
            <Logo />
            <Header>Create Account</Header>

            <View style={styles.container}>
              <Picker
                selectedValue={role}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
              >
                <Picker.Item label="BusinessOwner" value="businessOwner" />
                <Picker.Item label="Driver" value="driver" />
              </Picker>
            </View>
            <TextInput
              label="Name"
              returnKeyType="next"
              value={name.value}
              onChangeText={(text) => setName({ value: text })}
              error={!!name.error}
              errorText={name.error}
            />
            <TextInput
              label="Email Address"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              label="Company's Name"
              returnKeyType="next"
              value={companyName.value}
              onChangeText={(text) => setComName({ value: text })}
              error={!!companyName.error}
              errorText={companyName.error}
            />
            <TextInput
              label="Phone Number"
              returnKeyType="next"
              value={phoneNumber.value}
              onChangeText={(text) => setPhoneNbr({ value: text })}
              error={!!phoneNumber.error}
              errorText={phoneNumber.error}
            />
            <TextInput
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
            <Button
              mode="contained"
              onPress={onSignUpPressed}
              style={{ marginTop: 24 }}
            >
              Sign Up
            </Button>
            <View style={styles.row}>
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </Background>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1.5,
          backgroundColor: "white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
          <Background>
            {/* <BackButton goBack={navigation.goBack} /> */}
            <Logo />
            <Header>Create Account</Header>
            <View style={styles.container}>
              <Picker
                selectedValue={role}
                style={{ height: 50, width: 290 }}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
              >
                <Picker.Item label="BusinessOwner" value="businessOwner" />
                <Picker.Item label="Driver" value="driver" />
              </Picker>
            </View>
            <TextInput
              label="Name"
              returnKeyType="next"
              value={name.value}
              onChangeText={(text) => setName({ value: text })}
              error={!!name.error}
              errorText={name.error}
            />
            <TextInput
              label="Email Address"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              label="Business Owner Token"
              returnKeyType="next"
              value={businessOwnerToken.value}
              onChangeText={(text) => setBusinessOwnerToken({ value: text })}
              error={!!businessOwnerToken.error}
              errorText={businessOwnerToken.error}
            />

            <TextInput
              label="Phone Number"
              returnKeyType="next"
              value={phoneNumber.value}
              onChangeText={(text) => setPhoneNbr({ value: text })}
              error={!!phoneNumber.error}
              errorText={phoneNumber.error}
            />
            <TextInput
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />
            <Button
              mode="contained"
              onPress={onSignUpPressed}
              style={{ marginTop: 24 }}
            >
              Sign Up
            </Button>
            <View style={styles.row}>
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </Background>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
  },
});
