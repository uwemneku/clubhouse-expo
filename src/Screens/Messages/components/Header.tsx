import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider, ScreenHeader } from "../../../components";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <ScreenHeader
        middleComponent={"BACKCHANNEL"}
        rightComponent={
          <View style={style.rightIcons}>
            <AntDesign name="ellipsis1" size={24} color="black" />
            <Divider size={10} variant="horizontal" />
            <Feather name="edit" size={24} color="black" />
          </View>
        }
      />
    </View>
  );
};
const style = StyleSheet.create({
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Header;
