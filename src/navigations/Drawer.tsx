import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppTabNavigation from "./AppTabNavigation";
import Event from "../screens/events/EventsHome";
import { Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import AboutUs from "../screens/About-Us";
import ContactUs from "../screens/ContactUs";

const Drawer = createDrawerNavigator();
const AppDrawer = ({ navigation }: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 100,
            }}
          >
            <Image
              source={require("../../assets/images/schoolalllogo.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text
              variant="bodyLarge"
              style={{ fontSize: 25, textAlign: "center" }}
            >
              SchoolAll
            </Text>
          </View>
        ),
        headerStyle: { backgroundColor: "#FFDADA" },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 23,
                bottom: 26,
                borderRadius: 10,
                backgroundColor: "red",
                width: 10,
                height: 10,
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
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
              }}
              onPress={() => navigation.navigate("Notification" as never)}
            >
              <MaterialIcons
                name="notifications-none"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                width: 40,
                height: 40,
              }}
              onPress={() => navigation.navigate("Cart" as never)}
            >
              <MaterialIcons
                name="add-shopping-cart"
                size={25}
                color={"#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#A83542",
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              onPress={() => navigation.navigate("UserProfile" as never)}
            >
              <MaterialIcons name="person-outline" size={20} color={"#fff"} />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Drawer.Screen name="Main" component={AppTabNavigation} />
      <Drawer.Screen name="Events" component={Event} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact" component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
