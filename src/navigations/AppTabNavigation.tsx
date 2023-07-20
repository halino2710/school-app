import React from "react";
import { createBottomTabNavigator as createMaterialBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Dashboard from "../screens/Dashboard";
import Products from "../screens/products/Products";
import Home from "../screens/Home";
import BlogsPage from "../screens/blogs/BlogsPage";
import ProductList from "../screens/products/ProductList";
import BlogDetail from "../screens/blogs/BlogDetail";
import ProductDetails from "../screens/products/ProductDetails";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BlogsPage" component={BlogsPage} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  );
};
const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const AppTabNavigation = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home" size={25} color={"#000"} />
            ),
          }}
        />

        <Tab.Screen
          name="Blogs"
          component={BlogStack}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-reader" size={25} color={"#000"} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ProductStack}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="shopify" size={25} color={"#000"} />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="apps" size={25} color={"#000"} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppTabNavigation;
