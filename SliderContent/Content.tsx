import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Content = () => {
  return (
    <View
      style={{
        // padding: 10,
        marginVertical: 10,
        backgroundColor: "#FFF8F7",
        width: "90%",
      }}
    >
      <View style={{ flexDirection: "row", padding: 5, marginHorizontal: 5 }}>
        <View style={{ flexDirection: "row", marginRight: 140 }}>
          <Text style={{ fontSize: 16, marginRight: 0 }}>tag item</Text>
          <Text style={{ fontSize: 16, marginRight: 0 }}>tag item</Text>
          <Text style={{ fontSize: 16 }}>tag item</Text>
        </View>
        <View style={{}}>
          <MaterialIcons name="share" size={25} color={"#000"} />
        </View>
      </View>

      <View style={{ padding: 5, marginHorizontal: 5 }}>
        <Text style={{ fontSize: 20, marginBottom: 15 }}>BlogTtile</Text>
        <Text>
          Learn more about this bizarre object that has ‘broken the law’ and got
          Scientists confused
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 12,
        }}
      >
        <Image
          source={require("../assets/images/blogs-avatar.png")}
          resizeMode="cover"
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, color: "#AD414D" }}>Display name</Text>
          <Text>Subhead</Text>
        </View>
        <Text style={{ marginLeft: 90, fontSize: 16 }}>12th April, 2023</Text>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
