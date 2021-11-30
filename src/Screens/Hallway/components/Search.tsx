import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" />
      <Text>Search Clubhouse</Text>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
