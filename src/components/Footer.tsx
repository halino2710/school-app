import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#FFDADA",
        padding: 10,
        paddingBottom: 50,
      }}
    >
      <View style={{ flex: 2 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />
          <Text variant="titleLarge" style={{ marginLeft: 8 }}>
            SchoolAll
          </Text>
        </View>
        <Text style={{ marginVertical: 5 }}>
          44 Circular Road Freetown, Western Area Sierra Leone
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="phone" size={20} color="black" />
          <Text>+232 79 030421</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="email" size={20} color="black" />
          <Text>schoolall232@gmail.com</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: "#A83542", height: 140, width: 2 }}
      ></View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text variant="titleMedium">Useful Links</Text>
        <Text>Home</Text>
        <Text>Aout-Us</Text>
        <Text>Terms of Service</Text>
        <Text>About-Us</Text>
        <Text>Privacy policy</Text>
      </View>
      <View
        style={{ backgroundColor: "#A83542", height: 140, width: 2 }}
      ></View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text variant="titleMedium">Social Mdeia</Text>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#A83542",
              borderRadius: 5,
              paddingHorizontal: 25,
              paddingVertical: 5,
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <MaterialCommunityIcons name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#A83542",
              borderRadius: 5,
              paddingHorizontal: 25,
              paddingVertical: 5,
              marginBottom: 8,
            }}
          >
            <MaterialCommunityIcons name="twitter" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#A83542",

            borderRadius: 5,
            paddingHorizontal: 25,
            paddingVertical: 5,
            marginBottom: 8,
          }}
        >
          <MaterialCommunityIcons name="linkedin" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
