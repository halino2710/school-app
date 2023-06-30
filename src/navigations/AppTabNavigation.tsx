import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import Dashboard from "../screens/Dashboard";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import ProductList from "../screens/products/ProductList";
import Products from "../screens/products/Products";
import Home from "../screens/Home";
import Cart from "../screens/products/Cart";

const Tab = createBottomTabNavigator();

const itemAmmount = 2;

const AppTabNavigation = () => {
  const navigation = useNavigation();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require("../../assets/images/schoolalllogo.png")}
              resizeMode="contain"
              style={{ width: 50, height: 50 }}
            />
          ),
          headerStyle: { backgroundColor: "#FFDADA" },

          tabBarLabelStyle: { fontSize: 15 },
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <View
                style={{
                  position: "absolute",
                  left: 48,
                  bottom: 32,
                  borderRadius: 10,
                  backgroundColor: "red",
                  width: 16,
                  height: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={{
                  marginHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: "grey",
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                }}
                onPress={() => navigation.navigate("Notification" as never)}
              >
                <MaterialIcons
                  name="notifications-none"
                  size={33}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#A83542",
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                }}
                onPress={() => navigation.navigate("UserProfile" as never)}
              >
                <MaterialIcons name="person" size={30} color={"#fff"} />
              </TouchableOpacity>
            </View>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }: any) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ size, color }: any) => (
              <MaterialIcons name="apps" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={Products}
          options={{
            tabBarIcon: ({ size, color }: any) => (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ size, color }: any) => (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppTabNavigation;
