import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import UserProfile from "../screens/UserProfile";
import AppTabNavigation from "./AppTabNavigation";
import ProductDetails from "../screens/products/productDetails";
import Notification from "../screens/Notification";
import ProductList from "../screens/products/ProductList";
import BlogsPage from "../screens/blogs/BlogsPage";
import BlogsCarousel from "../screens/blogs/BlogsCarousel";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="WelcomeScreen"
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AppTabNavigation" component={AppTabNavigation} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="BlogsPage" component={BlogsPage} />
      <Stack.Screen name="BlogsCarousel" component={BlogsCarousel} />
    </Stack.Navigator>
  );
};

export default AppStack;
