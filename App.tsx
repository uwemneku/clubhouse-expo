import { Portal, PortalHost, PortalProvider } from "@gorhom/portal";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainNavigator } from "./src/Navigation";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#27ae61",
    card: "#5576AB",
    background: "#f2f0e4",
  },
};
export default function App() {
  return (
    <PortalProvider>
      <PortalHost name="h" />
      <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
        <NavigationContainer theme={MyTheme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </PortalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
