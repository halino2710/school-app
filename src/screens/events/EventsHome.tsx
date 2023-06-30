import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

const Event = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center" }}>
        <ImageBackground
          source={require("../../../assets/images/graduation-image.png")}
          resizeMode="contain"
          style={{ width: "100%", height: 400, justifyContent: "flex-end" }}
        >
          <View style={{ marginLeft: 20, marginVertical: 30 }}>
            <Text style={{ fontSize: 20, color: "#fff", marginBottom: 10 }}>
              School events
            </Text>
            <Text style={{ fontSize: 23, color: "#fff" }}>
              Annual Graduation Ceremony
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 15,
          marginHorizontal: 10,
          backgroundColor: "#FFF8F7",
        }}
      >
        <View
          style={{
            backgroundColor: "#765657",
            height: 70,
            width: 10,
            marginRight: 5,
          }}
        ></View>

        <View>
          <Text style={{ fontSize: 25, marginBottom: 8 }}>
            Upcomming Events
          </Text>
          <Text style={{ fontSize: 16 }}>
            Check out our latest Upcoming event today!
          </Text>
        </View>
      </View>

      <View style={{ paddingTop: 5 }}>
        <TouchableOpacity
          onPress={() => Alert.alert("Upcoming inter-house school sport")}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: 12,
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/sport.png")}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginRight: 10 }}
            />
            <View>
              <Text>School Sport</Text>
              <Text>Category</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Upcoming price giving ceremony")}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: 12,
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/price-giving.png")}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginRight: 10 }}
            />
            <View>
              <Text>Price Giving Ceremony</Text>
              <Text>Ceremony</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Upcoming Board Meeting")}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: 12,
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/board-meeting.png")}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginRight: 10 }}
            />
            <View>
              <Text>Board Meeting</Text>
              <Text>Meeting</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Upcoming Field Trip")}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: 12,
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/field-trip.png")}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginRight: 10 }}
            />
            <View>
              <Text>Field Trip</Text>
              <Text>Category</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({});
