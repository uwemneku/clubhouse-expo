import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppText } from "../../../components";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="gray" />
      <AppText color="gray">Search Clubhouse</AppText>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "	rgba(211,211,211, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
