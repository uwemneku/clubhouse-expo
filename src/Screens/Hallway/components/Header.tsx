import React, { FC } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, NotificationBell } from "../../../components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../types";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: StackNavigationProp<StackParamList, "hallway">;
}
const Header: FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const iconMargin = width * 0.07;
  const marginStyle = { marginRight: iconMargin };

  const navigateToExplore = () => navigation.navigate("explore");
  const navigateToProfile = () =>
    //TODO: change id to logged in user id
    navigation.navigate("profile", { id: "1234" });

  return (
    <View style={[styles.flexItems, styles.container]}>
      <FontAwesome5
        name="compass"
        size={30}
        color="black"
        style={{ flex: 1 }}
        onPress={navigateToExplore}
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
        <TouchableOpacity onPress={navigateToProfile}>
          <Avatar size={35} />
        </TouchableOpacity>
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
