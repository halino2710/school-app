import "react-native-gesture-handler";

import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigations/AppStack";

StatusBar.setBarStyle("dark-content", true);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // top: StatusBar.currentHeight,
    flex: 1,
    // backgroundColor: "#FFDADA",
  },
});
