import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { mainStackRoutes } from "../types";
import { HallwayScreen, Messages } from "../Screens";
import { Explore } from "../Screens/Explore";

const { Navigator, Screen } = createStackNavigator<mainStackRoutes>();

const MainNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Screen name="hallway" component={HallwayScreen} />
      <Screen name="messages" component={Messages} />
      <Screen name="explore" component={Explore} />
    </Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
