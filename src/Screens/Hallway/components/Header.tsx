import React, { FC } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, NotificationBell } from "../../../components";
import { StackNavigationProp } from "@react-navigation/stack";
import { mainStackRoutes } from "../../../types";

interface Props {
  navigation: StackNavigationProp<mainStackRoutes, "hallway">;
}
const Header: FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const iconMargin = width * 0.07;
  const marginStyle = { marginRight: iconMargin };
  return (
    <View style={[styles.flexItems, styles.container]}>
      <FontAwesome5
        name="compass"
        size={30}
        color="black"
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("explore");
        }}
      />
      <View style={styles.flexItems}>
        <Octicons
          name="mail-read"
          style={marginStyle}
          size={30}
          color="black"
        />
        <FontAwesome
          name="calculator"
          style={marginStyle}
          size={28}
          color="black"
        />
        <View style={marginStyle}>
          <NotificationBell />
        </View>
        <Avatar size={35} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  flexItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    marginRight: 25,
  },
});
