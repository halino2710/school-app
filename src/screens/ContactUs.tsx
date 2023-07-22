import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const { width } = Dimensions.get("window");

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView style={{ paddingBottom: 10 }}>
      <Image
        source={require("../../assets/images/location.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      />
      <View style={{ paddingVertical: 10, marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingLeft: 15,
          }}
        >
          <Ionicons name="ios-location-outline" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 25 }}>Location:</Text>
            <Text style={{ fontSize: 18 }}>44 Circular Road</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingLeft: 15,
          }}
        >
          <MaterialCommunityIcons name="email-outline" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 25 }}>Email:</Text>
            <Text style={{ fontSize: 18 }}>schoolall232@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            paddingVertical: 20,

            paddingLeft: 15,
          }}
        >
          <MaterialCommunityIcons name="phone-outline" size={30} />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 25 }}>Call:</Text>
            <Text style={{ fontSize: 18 }}>+232 79 030 420</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label={"Your Nmae"}
          mode="outlined"
          value={name}
          onChangeText={(newName) => setName(newName)}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          label="Your Email"
          mode="outlined"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          value={subject}
          onChangeText={(newSubject) => setSubject(newSubject)}
          label="Subject"
          mode="outlined"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)}
          label="Message"
          multiline
          mode="outlined"
          style={{ height: 100 }}
        />
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert("Message sent")}
        style={{
          flexDirection: "row",
          borderWidth: 0.8,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          marginVertical: 20,
          marginHorizontal: width * 0.35,
        }}
      >
        <MaterialCommunityIcons
          name="send-outline"
          size={25}
          color={"#A83542"}
        />
        <Text style={{ fontSize: 18, color: "#A83542", marginLeft: 10 }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
