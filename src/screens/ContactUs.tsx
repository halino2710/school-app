import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView style={{}}>
      <Image
        source={require("../../assets/images/location.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      />
      <View
        style={{ padding: 10, marginVertical: 10, backgroundColor: "#FFDADA" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-location-outline" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 18 }}>Location:</Text>
            <Text style={{ fontSize: 16 }}>44 Circular Road</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <MaterialIcons name="email" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 18 }}>Email:</Text>
            <Text style={{ fontSize: 16 }}>schoolall232@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="phone" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 18 }}>Call:</Text>
            <Text style={{ fontSize: 16 }}>+232 79 030 420</Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          Send us a message:
        </Text>
        <TextInput
          placeholder="Your Name"
          mode="flat"
          value={name}
          onChangeText={(newName) => setName(newName)}
          style={{ marginBottom: 10, backgroundColor: "#FFDADA" }}
        />
        <TextInput
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          placeholder="Your Email"
          style={{ marginBottom: 10, backgroundColor: "#FFDADA" }}
        />
        <TextInput
          value={subject}
          onChangeText={(newSubject) => setSubject(newSubject)}
          placeholder="Subject"
          style={{ marginBottom: 10, backgroundColor: "#FFDADA" }}
        />
        <TextInput
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)}
          placeholder="Message"
          multiline
          style={{ marginBottom: 10, backgroundColor: "#FFDADA" }}
        />
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert("Message sent")}
        style={{
          flexDirection: "row",
          backgroundColor: "#A83542",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          marginVertical: 20,
          marginHorizontal: 10,
        }}
      >
        <MaterialIcons name="send" size={30} color={"#fff"} />
        <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10 }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
