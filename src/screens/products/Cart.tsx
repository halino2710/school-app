import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import { SelectList } from "react-native-dropdown-select-list";

const Cart = ({ navigation }: any) => {
  const [rating, setRating] = useState(3.5);
  const [selectQuantity, setSelectQuantity] = useState([1]);

  const data = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
  ];

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20, width: 50, marginTop: 10 }}
      >
        <MaterialIcons name="arrow-back-ios" size={30} />
      </TouchableOpacity>
      <ScrollView>
        <ScrollView style={{}}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 15,
              width: 200,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#765657",
                height: 30,
                width: 8,
                marginRight: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Text
                style={{
                  color: "#201A1A",
                  fontSize: 40,
                  fontWeight: "bold",
                }}
              >
                Items
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>Product name</Text>
                <Text>Le 9.99</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>Product name</Text>
                <Text>Le 9.99</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>Product name</Text>
                <Text>Le 9.99</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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

          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
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
            {/* <MaterialIcons name="send" size={30} color={"#fff"} /> */}
            <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10 }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
