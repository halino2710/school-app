import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Notification = ({ navigation }: any) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingTop: 20, marginLeft: 20 }}
      >
        <MaterialIcons name="arrow-back" size={30} />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notification is empty</Text>
      </View>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({});
