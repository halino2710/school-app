import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

const Cart = ({ navigation }: any) => {
  const [rating, setRating] = useState(3.5);
  const [selectQuantity, setSelectQuantity] = useState([1]);
  const [PaymentMethod, setPaymentMethod] = useState([]);

  const data = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
  ];
  const paymentMethodData = [
    { key: 1, value: "Orange Money" },
    { key: 2, value: "Africell Money" },
    { key: 3, value: "Credit Card" },
    { key: 4, value: "Payment on Delivery" },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          width: 200,
        }}
      >
        <View
          style={{
            backgroundColor: "#765657",
            height: 30,
            width: 10,
            marginRight: 5,
          }}
        ></View>
        <View>
          <Text
            style={{
              color: "#201A1A",
              fontSize: 25,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Order Items
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#EBDCDC",
          backgroundColor: "#FFF8F7",
          paddingHorizontal: 10,
          paddingVertical: 10,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={require("../../../assets/images/bag.jpg")}
          resizeMode="cover"
          style={{ width: 80, height: 80 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 8,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18 }}>Product name</Text>
            <Text>Le 9.99</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginVertical: 8 }}>
              <Text>Category</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: -6, marginTop: 8 }}>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    starSize={15}
                    enableSwiping
                    color="#A83542"
                  />
                </View>
                <Text style={{ textAlign: "center" }}>(18)</Text>
              </View>
            </View>
            <View style={{ left: 10 }}>
              <Text>Quantity</Text>
              <View>
                <SelectList
                  data={data}
                  setSelected={(item: any) => setSelectQuantity(item)}
                  save="value"
                  search={false}
                  searchPlaceholder=""
                  placeholder="Qty"
                  dropdownStyles={{
                    width: 50,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  boxStyles={{
                    width: 67,
                    height: 45,
                    justifyContent: "center",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#EBDCDC",
          backgroundColor: "#FFF8F7",
          paddingHorizontal: 10,
          paddingVertical: 10,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={require("../../../assets/images/bag.jpg")}
          resizeMode="cover"
          style={{ width: 80, height: 80 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 8,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18 }}>Product name</Text>
            <Text>Le 9.99</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginVertical: 8 }}>
              <Text>Category</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: -6, marginTop: 8 }}>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    starSize={15}
                    enableSwiping
                    color="#A83542"
                  />
                </View>
                <Text style={{ textAlign: "center" }}>(18)</Text>
              </View>
            </View>
            <View style={{ left: 10 }}>
              <Text>Quantity</Text>
              <View>
                <SelectList
                  data={data}
                  setSelected={(item: any) => setSelectQuantity(item)}
                  save="value"
                  search={false}
                  searchPlaceholder=""
                  placeholder="Qty"
                  dropdownStyles={{
                    width: 50,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  boxStyles={{
                    width: 67,
                    height: 45,
                    justifyContent: "center",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#EBDCDC",
          backgroundColor: "#FFF8F7",
          paddingHorizontal: 10,
          paddingVertical: 10,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={require("../../../assets/images/bag.jpg")}
          resizeMode="cover"
          style={{ width: 80, height: 80 }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 8,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18 }}>Product name</Text>
            <Text>Le 9.99</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginVertical: 8 }}>
              <Text>Category</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: -6, marginTop: 8 }}>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    starSize={15}
                    enableSwiping
                    color="#A83542"
                  />
                </View>
                <Text style={{ textAlign: "center" }}>(18)</Text>
              </View>
            </View>
            <View style={{ left: 10 }}>
              <Text>Quantity</Text>
              <View>
                <SelectList
                  data={data}
                  setSelected={(item: any) => setSelectQuantity(item)}
                  save="value"
                  search={false}
                  searchPlaceholder=""
                  placeholder="Qty"
                  dropdownStyles={{
                    width: 50,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  boxStyles={{
                    width: 67,
                    height: 45,
                    justifyContent: "center",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ padding: 10, marginTop: 20 }}>
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

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
  );
};

export default Cart;

const styles = StyleSheet.create({});
