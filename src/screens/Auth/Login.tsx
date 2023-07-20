import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        label={"Email"}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        placeholder="Please enter your email"
        placeholderTextColor={"#000"}
      />
      <TextInput
        label={"Password"}
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        placeholder="Please enter password"
        placeholderTextColor={"#000"}
        secureTextEntry
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
