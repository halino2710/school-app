import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Products = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFDADA" }}>
      <Image
        source={require("../../../assets/images/productPageLogo.png")}
        resizeMode="cover"
      />
      <Text
        style={{
          color: "#40000B",
          textAlign: "center",
          fontSize: 30,
          paddingVertical: 20,
        }}
      >
        Shop for Products on Online store
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          paddingVertical: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={{
            backgroundColor: "#A83542",
            width: 161,
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Shop now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
            borderWidth: 1,
          }}
        >
          <Text style={{ textAlign: "center", color: "#A83542" }}>
            Download Brochure
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
