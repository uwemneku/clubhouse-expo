import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ExploreScreenHeader } from "./components";

const Explore = () => {
  return (
    <SafeAreaProvider>
      <ExploreScreenHeader />
    </SafeAreaProvider>
  );
};

export default Explore;

const styles = StyleSheet.create({});
