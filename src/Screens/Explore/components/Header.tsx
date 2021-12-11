import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text>EXPLORE</Text>
      <Ionicons name="ios-people-circle-outline" size={24} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
