import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { MaterialIcons } from "@expo/vector-icons";

const Checkout = ({ navigation }: any) => {
  const [PaymentMethod, setPaymentMethod] = useState([]);

  const paymentMethodData = [
    { key: 1, value: "Orange Money" },
    { key: 2, value: "Africell Money" },
    { key: 3, value: "Credit Card" },
    { key: 4, value: "Payment on Delivery" },
  ];

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20, width: 50, marginTop: 15 }}
      >
        <MaterialIcons name="arrow-back-ios" size={30} />
      </TouchableOpacity>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              height: 60,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/image.png")}
              resizeMode="cover"
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <Text
              style={{
                marginVertical: 10,
                color: "#201A1A",
                fontSize: 25,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Order Summary
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "silver",
              marginBottom: 5,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>Delivery cost</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Le 15</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>Discount</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Le -5</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>Tax (10%)</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Le 10</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>Subtotal</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Le 100</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "silver",
              marginVertical: 5,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Le 120</Text>
          </View>
        </View>

        <View style={{ padding: 10, marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              height: 60,
              backgroundColor: "#FFF8F7",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/image.png")}
              resizeMode="cover"
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <Text
              style={{
                marginVertical: 10,
                color: "#201A1A",
                fontSize: 25,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Payment Method
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "silver",
              marginBottom: 5,
            }}
          ></View>
          <SelectList
            data={paymentMethodData}
            setSelected={(value: any) => setPaymentMethod(value)}
          />
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => Alert.alert("Payment Successful")}
            style={{
              backgroundColor: "#A83542",
              borderRadius: 100,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 50,
              marginTop: 10,
              marginBottom: 50,
            }}
          >
            <Text style={{ color: "#fff" }}>Make Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
