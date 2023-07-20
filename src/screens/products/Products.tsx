import { View, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import ProductSliderMain from "./ProductSliderMain";
import ProductSliderList from "./ProductSliderList";

const Products = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 20, marginHorizontal: 10, marginBottom: 10 }}
    >
      <ProductSliderMain />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginHorizontal: 20,
          backgroundColor: "#FFF8F7",
          marginBottom: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#765657",
            height: 45,
            width: 10,
            marginRight: 5,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 40, marginVertical: 8 }}>Products</Text>
          <View style={{ alignItems: "flex-end", marginRight: 10 }}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#000"
            />
          </View>
        </View>
      </View>
      <ProductSliderList />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "#FFF8F7",
          marginBottom: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#765657",
            height: 40,
            width: 10,
            marginRight: 5,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30, marginBottom: 8, fontWeight: "bold" }}>
            Trending
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="#000"
            />
          </View>
        </View>
      </View>

      <ProductSliderList />
    </ScrollView>
  );
};

export default Products;
