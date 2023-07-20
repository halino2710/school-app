import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import UserProfile from "../screens/UserProfile";
import ProductDetails from "../screens/products/ProductDetails";
import Notification from "../screens/Notification";
import ProductList from "../screens/products/ProductList";
import BlogsPage from "../screens/blogs/BlogsPage";
import BlogDetail from "../screens/blogs/BlogDetail";
import AppDrawer from "./Drawer";
import Cart from "../screens/products/Cart";
import BlogSliderMain from "../screens/blogs/BlogSliderMain";
import Checkout from "../screens/products/Checkout";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="WelcomeScreen"
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="BlogsPage" component={BlogsPage} />
      <Stack.Screen name="BlogSliderMain" component={BlogSliderMain} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default AppStack;
