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
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

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
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  return (
    <PortalProvider>
      <PortalHost name="h" />
      <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
        <NavigationContainer theme={MyTheme}>
          {fontsLoaded ? <MainNavigator /> : <AppLoading />}
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
