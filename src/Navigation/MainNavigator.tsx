import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { mainStack } from "../types";
import { HallwayScreen } from "../Screens/Hallway";

const { Navigator, Screen } = createStackNavigator<mainStack>();

const MainNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="hallway" component={HallwayScreen} />
    </Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
