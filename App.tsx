import "react-native-gesture-handler";

import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigations/AppStack";
export default function App() {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
