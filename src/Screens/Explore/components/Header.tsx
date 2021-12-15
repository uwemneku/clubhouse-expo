import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppText, BackButton, ScreenHeader } from "../../../components";
import { StackParamList } from "../../../types";
interface Props {
  navigation: StackNavigationProp<StackParamList, "explore">;
}
const Header = ({ navigation }: Props) => {
  return (
    <ScreenHeader
      middleComponent={"EXPLORE"}
      rightComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate("recentlyListenedTo")}
        >
          <Ionicons name="ios-people-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      }
    />
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
