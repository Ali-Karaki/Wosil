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
import { theme } from "../core/theme";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import {
  getAllDrivers,
  addManager,
  isAvailableMail,
  isAvailablePhone,
} from "../services/managers.services";
import firebase from "firebase";
import { app } from "../firebase.js";
import { auth } from "../firebase";

export default function SignupScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [companyName, setComName] = useState({ value: "", error: "" });
  const [phoneNumber, setPhoneNbr] = useState({ value: "", error: "" });

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
    const comNameError = nameValidator(companyName.value);
    const phoneNbrError = nameValidator(phoneNumber.value);
    if (
      emailError ||
      passwordError ||
      nameError ||
      comNameError ||
      phoneNbrError
    ) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setComName({ ...companyName, error: comNameError });
      setPhoneNbr({ ...phoneNumber, error: phoneNbrError });
      return;
    } else {
      handleSignUp();
      addManager(name.value, email.value, companyName.value, phoneNumber.value);
    }
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user);
      })
      .catch((error) => alert(error.message));
  };

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
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text })}
            error={!!name.error}
            errorText={name.error}
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
            label="Email"
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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
